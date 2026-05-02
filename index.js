import http from 'node:http';
import path from "node:path";

import express from 'express';
import { Server } from 'socket.io';

import { publisher, subscriber, redis } from './redis-connection.js';

const CHECKBOX_SIZE = 100;
const CHECKBOX_STATE_KEY = 'checkbox-state';

const state = {
    checkboxes: new Array(CHECKBOX_SIZE).fill(false),
}

async function main() {
    const app = express();
    const server = http.createServer(app);

    const io = new Server();
    io.attach(server);

    await subscriber.subscribe('internal-server:checkbox:change');
    subscriber.on('message', (channel, message) => {
        if (channel === 'internal-server:checkbox:change') {
            const { index, checked } = JSON.parse(message);
            io.emit('server:checkbox:change', { index, checked });
        }
    });

    io.on('connection', (socket) => {
        console.log('A user connected with id:', socket.id);

        socket.on('client:checkbox:change', async (data) => {
            console.log('Received checkbox change from client:', data);
            const existingState = await redis.get(CHECKBOX_STATE_KEY);
            if(existingState) {
                const remoteData = JSON.parse(existingState);
                remoteData[data.index] = data.checked;
                await redis.set(CHECKBOX_STATE_KEY, JSON.stringify(remoteData));
            } else {
                const newState = new Array(CHECKBOX_SIZE).fill(false);
                await redis.set(CHECKBOX_STATE_KEY, JSON.stringify(newState));
            }
            await publisher.publish('internal-server:checkbox:change', JSON.stringify(data));
        });
    });

    const PORT = process.env.PORT || 8000;

    app.use(express.static(path.resolve('./public')));

    app.get('/health', (req, res) => res.send('Health check!'));

    app.get('/checkboxes', async (req, res) => {
        const existingState = await redis.get(CHECKBOX_STATE_KEY);
        if(existingState) {
            return res.json({ checkboxes: JSON.parse(existingState) });
        }
        return res.json({ checkboxes: new Array(CHECKBOX_SIZE).fill(false) });
    });


    server.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
}

main();