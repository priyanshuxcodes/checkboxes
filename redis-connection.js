import Redis from 'ioredis';


function createRedisConnection() {
    if (process.env.REDIS_URL) {
    // Production (Render / Upstash)
    return new Redis(process.env.REDIS_URL);
  }

  // Local (Docker Valkey)
  return new Redis({
    host: "127.0.0.1",
    port: 6379,
  });
}

export const publisher = createRedisConnection();

export const subscriber = createRedisConnection();

export const redis = createRedisConnection();