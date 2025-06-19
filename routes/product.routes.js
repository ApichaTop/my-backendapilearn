const Product = require("../models/product.model");
const express = require("express");
const router = express.Router();
const {getProducts,getsingleProduct,createProduct,updateProduct,delteProduct} = require("../controllers/product.controller");

// get all product
router.get("/",getProducts)

// get single product by id
router.get("/:id",getsingleProduct)

// create product
router.post("/", createProduct)

// update product by id
router.put("/:id",updateProduct)

// delete product by id
router.delete("/:id",delteProduct)
    
module.exports = router;