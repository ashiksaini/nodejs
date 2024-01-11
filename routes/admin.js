import path from 'path';
import express from "express";

import __dirname from "../utils/path.js";

const router = express.Router();

const products = [];

// admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // Send html page as response 
  res.render("add_product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export default { router, products };
