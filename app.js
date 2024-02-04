import path from "path";
import express from "express";
import bodyParser from "body-parser";

import __dirname from "./utils/path.js";
import { adminRoutes, shopRoutes } from "./routes/routes.js";
import { status404 } from "./controllers/status.js";
import { pool } from "./utils/database.js";

// Get express
const expressApp = express();

// Set global values at express app
expressApp.set("view engine", "ejs");
expressApp.set("views", "views");

pool.execute("SELECT * FROM products").then(result => {
  console.log(result[0][0]);
}).catch(error => {
  console.log(error);
})

// Parse incoming request body
expressApp
  .use(bodyParser.urlencoded({ extended: false })) // Body parser for incoming request
  .use(express.static(path.join(__dirname, "..", "public"))) // It servers static files, like css files, image files those file which are static in this project.
  .use("/", (req, res, next) =>
    res.sendFile(path.join(__dirname, "..", "views", "time.html"))
  )
  .use("/admin", adminRoutes) // Common segment "/admin" for all the routes available in admin.js
  .use(shopRoutes) // Normal routes
  .use(status404); // Basic function of .use

// Start and listen the server
expressApp.listen(8000);
