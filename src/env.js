import * as dotenv from "dotenv";
dotenv.config();

export default {
  api: {
    port: process.env.PORT,
  },
  fish_watch: {
    url: process.env.FISH_WATCH_URL,
  },
};
