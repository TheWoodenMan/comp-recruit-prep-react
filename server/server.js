// express setup
import express from "express";
const app = express()

require("dotenv").config({ path: "server/config/.env" });

// import path from 'path'

// cors
// import cors from 'cors'
// app.use(cors())

import bodyParser from 'body-parser';
import logger from "morgan";

// import _default from '@storybook/addon-styling';

// Connect to mongodb
import dbConnect from "./db/dbConnect.js";
dbConnect()

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// // this replicates the functionality of __dirname
// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)


const port = process.env.SERVER_PORT

// express middleware
app.use(express.static('public'))

// User Routes

import userRoutes from "./routes/user.js";
app.use("/api/user", userRoutes);

import authRoutes from "./routes/auth.js";
app.use("/api/auth", authRoutes);

app.get('/works', (req, res) => {
  res.send('GET request works')
})

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`)
})
