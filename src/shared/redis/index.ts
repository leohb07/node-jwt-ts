import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_URL,
});

async function connection() {
  try {
    await redisClient.connect();
    console.log("Redis client connected...");
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connection, 5000);
  }
}

connection();
redisClient.on("error", (error) => console.log(error));

export { redisClient };
