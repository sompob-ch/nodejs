const express = require("express");
const { connect, connection } = require("mongoose");

const app = express();
let server;
const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/myapp";
connect(mongoUrl).then(() => {
  console.log("Connected to MongoDB");
  server = app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
});

const cleanup = async () => {
  try {
    await sleep(5000);
    await connection.close();
    console.log("MongoDB connection closed !!!!");
  } catch (error) {
    console.log("Error occurred while closing MongoDB connection", error);
  }
};

const sleep = (ms) => {
  return new Promise((resolve) => {
    console.log(`Waiting for ${ms} ms before cleanup`);
    setTimeout(resolve, ms);
  });
}

process.on("SIGINT", async () => {
  console.log("SIGINT signal received.");
  server.close(async () => {
    console.log("Closed out remaining connections");
    // Additional cleanup tasks go here, e.g., close database connection
    await cleanup();
    console.log("Exiting process");
    process.exit(0);
  });
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM signal received.");
  server.close(async () => {
    console.log("Closed out remaining connections");
    // Additional cleanup tasks go here, e.g., close database connection
    await cleanup();
    console.log("Exiting process");
    process.exit(0);
  });
});

