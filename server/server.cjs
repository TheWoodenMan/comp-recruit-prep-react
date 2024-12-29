// express setup
const express = require("express")
const app = express()

require("dotenv").config({ path: "server/config/.env" });

// import path from 'path'

// cors
// import cors from 'cors'
// app.use(cors())

const bodyParser = require('body-parser')
const logger = require("morgan")

// import _default from '@storybook/addon-styling';

// Connect to mongodb
const dbConnect = require("./db/dbConnect.cjs")
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

const userRoutes = require("./routes/user.cjs");
app.use("/api/user", userRoutes);

const authRoutes = require("./routes/auth.cjs")
app.use("/api/auth", authRoutes);

app.get('/works', (req, res) => {
  res.send('GET request works')
})

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`)
})
