import path from 'path';
import express from "express";

import __dirname from "../utils/path.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});

export default router;