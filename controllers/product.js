const products = [];

export const getAddProduct = (req, res, next) => {
  // Send html page as response
  res.render("add_product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAddProduct = (req, res, next) => {
  (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect("/");
  };
};

export const getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
