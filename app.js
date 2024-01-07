import path from "path";
import express from "express";
import bodyParser from "body-parser";

import __dirname from "./utils/path.js";
import { adminRoutes, shopRoutes } from "./routes/routes.js";

// Get express
const expressApp = express();

// Parse incoming request body
expressApp
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname, "..", "public"))) // It servers static files
  .use("/admin", adminRoutes) // Common segment "/admin" for all the routes available in admin.js
  .use(shopRoutes)
  .use((req, res, next) => res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html")));

// Start and listen the server
expressApp.listen(8000);
