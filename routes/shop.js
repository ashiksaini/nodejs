import path from 'path';
import express from "express";

import { adminRoutes } from "../routes/routes.js";
import __dirname from "../utils/path.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminRoutes.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

export default router;