import redis from "redis";

export const redisClient = async () => {
  const redisClient = redis.createClient();
  redisClient.on("error", (error) => console.error(`Error : ${error}`));
  await redisClient.connect();
  return redisClient;
};
