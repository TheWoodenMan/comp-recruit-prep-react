import { connect } from "mongoose";
require("dotenv").config({ path: "server/config/.env" });

const dbConnect = async function () {
    // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
    connect(
          process.env.DB_URL,
        {
          //   these are options to ensure that the connection is done properly
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("Successfully connected to MongoDB Atlas!");
      })
      .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
      });
  }

export default dbConnect