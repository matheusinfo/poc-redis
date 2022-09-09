import express from "express";
import env from "./env.js";
import { redisClient } from "./redis.js";
import { fetchApiData } from "./fetch.js";

const app = express();
const redis = await redisClient();

const getSpeciesData = async (req, res) => {
  try {
    let result = null;
    let isCached = false;
    const species = req.params.species;

    const cacheResults = await redis.get(species);
    if (cacheResults) {
      isCached = true;
      result = JSON.parse(cacheResults);
    } else {
      result = await fetchApiData(`${env.fish_watch.url}/${species}`);
      await redis.set(species, JSON.stringify(result));
    }

    res.send({
      fromCache: isCached,
      data: result,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

app.get("/fish/:species", getSpeciesData);

app.listen(env.api.port, () => console.log(`Service already running!`));
