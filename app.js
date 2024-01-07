// import http from core node
import http from "http";

// import express from express package
import express from "express";

// This will give as an express app for handling the all the features
// that express ships.
const expressApp = express();

// Express way to handle routes
// This "/" will handle all the req that comes in as it does not define any specific path.
expressApp.use("/", (req, res, next) => {
  console.log("/ Routes");
});

// Add middleware to express app
expressApp.use((req, res, next) => {
  console.log("In middleware 1");

  // This allows request to continue to next middleware
  // here i.e., middleware2
  next();
});

// Another middleware
expressApp.use((req, res, next) => {
  console.log("In middleware 2");

  // We can send response as
  res.send("<h1> Hello from express js </h1>");
});

// Express way to create and listen server
expressApp.listen(8000);

// Node JS way to create and listen server
// Create a server
/*
    const server = http.createServer(expressApp);
    server.listen(8000);
  */
