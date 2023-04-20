import express from 'express';
import { connectDB } from "./Config/database.js";
import cloudinary from "cloudinary";
import nodeCron from "node-cron";
import { Stats } from "./Models/Stats.js";


const app = express();

connectDB();
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

nodeCron.schedule("0 0 0 5 * *", async () => {
  try {
    await Stats.create({});
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => {
  console.log(`Server is working on port: 4000`);
});
