import path from 'path';
import express from "express";

import { adminRoutes } from "../routes/routes.js";
import __dirname from "../utils/path.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(adminRoutes.products);
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});

export default router;