# 🚀 1 Million Checkboxes

A real-time, massively interactive checkbox grid built using **Redis**, **WebSockets**, and vanilla **HTML, CSS, JS**.

This project allows thousands of users to toggle checkboxes simultaneously and see updates instantly across all connected clients.

---

## 🌐 Live Concept

Imagine a grid of **1,000,000 checkboxes** where:
- Every click is broadcast in real-time
- Everyone sees changes instantly
- State is shared globally

---

## 🧠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript (Vanilla)

### Backend
- WebSockets (real-time communication)

### Data Layer
- Redis (in-memory data store)

---

## ⚙️ How It Works

1. Client connects to server via WebSocket  
2. Initial checkbox states are fetched from Redis  
3. When a user toggles a checkbox:
   - Event is sent to server  
   - Server updates Redis  
   - Server broadcasts update to all clients  
4. All connected users see the update instantly ⚡  

---

## 📦 Features

- ✅ Real-time updates using WebSockets  
- ✅ Persistent state using Redis  
- ✅ Handles large-scale checkbox grid  
- ✅ Lightweight frontend (no frameworks)  
- ✅ Event-driven architecture  

---

## 🖼️ UI Overview

- Grid-based layout  
- Each checkbox uniquely indexed  
- Smooth interaction even with large datasets  

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/1-million-checkboxes.git
cd 1-million-checkboxes
2. Install dependencies
npm install
3. Start Redis

Make sure Redis is running locally:

redis-server
4. Start the server
npm start
5. Open in browser
http://localhost:3000
📡 WebSocket Events
Client → Server

toggle_checkbox

{
  "id": 12345,
  "checked": true
}
Server → Clients

update_checkbox

{
  "id": 12345,
  "checked": true
}
🚧 Challenges Solved
Handling high-frequency updates
Maintaining consistent state across clients
Efficiently managing 1M checkbox data
Optimizing DOM rendering for performance
💡 Future Improvements
Virtualized rendering for better performance
User cursor tracking
Heatmap of most-clicked checkboxes
Authentication system
Horizontal scaling with Redis Pub/Sub
