const Product = require("../database/models/productModel");
const { formatMongoData, checkObjectId } = require("../helper/DBhelper");
const constants = require("../constants");
const mongoose = require("mongoose");
module.exports.createProductService = async (requestData) => {
  try {
    let product = new Product({ ...requestData });
    let result = await product.save();
    return formatMongoData(result); // works only for single document only work for visible purpose to client nothing changes in DB
  } catch (error) {
    console.log("Something Went Wrong:Serivce:createProduct", error);
    throw new Error(error);
  }
};

module.exports.getAllProducts = async ({ skip = 0, limit = 10 }) => {
  try {
    let products = await Product.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formatMongoData(products);
  } catch (error) {
    console.log("Something Went Wrong:Serivce:createProduct", error);
    throw new Error(error);
  }
};

module.exports.getProductById = async ({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findById(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    // console.log("Something Went Wrong:Serivce: getProductById", error);
    throw new Error(error);
  }
};
