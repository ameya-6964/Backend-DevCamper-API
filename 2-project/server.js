// All Imports
require("dotenv").config({ path: "./config/.env" })
const express = require("express");
const bootcamps = require("./routes/bootcamps");
const morgan = require('morgan');
const connectDB = require("./config/db");
const colors = require("colors");

//Connect To Database
connectDB();

// Variables
const app = express();
const PORT = process.env.PORT || 5000;

// Development Logger Middleware
if (process.env.NODE_ENV === "DEVELOPMENT") {
  app.use(morgan("dev"))
}

// Routes
app.use("/api/v1/bootcamps", bootcamps)

const server = app.listen(PORT, () => {
  console.log(`Server Is Running On Port : ${process.env.PORT} In ${process.env.NODE_ENV} Mode`.yellow.bold)
})

// Handle Unhandle Rejection 

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`.red);
  server.close(() => process.exit(1))
})