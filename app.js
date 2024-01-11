import path from "path";
import express from "express";
import bodyParser from "body-parser";

import __dirname from "./utils/path.js";
import { adminRoutes, shopRoutes } from "./routes/routes.js";

// Get express
const expressApp = express();

// Set global values at express app
expressApp.set("view engine", "ejs");

// Parse incoming request body
expressApp
  .use(bodyParser.urlencoded({ extended: false })) // Body parser for incoming request 
  .use(express.static(path.join(__dirname, "..", "public"))) // It servers static files, like css files, image files those file which are static in this project.
  .use("/admin", adminRoutes.router) // Common segment "/admin" for all the routes available in admin.js
  .use(shopRoutes) // Normal routes
  .use((req, res, next) => res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"))); // Basic function of .use

// Start and listen the server
expressApp.listen(8000);
