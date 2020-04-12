const Product = require("../database/models/productModel");
module.exports.createProductService = async (requestData) => {
  try {
    let product = new Product({ ...requestData });
    let result = await product.save();
    return result.toObject(); // works only for single document only work for visible purpose to client nothing changes in DB
  } catch (error) {
    console.log("Something Went Wrong:Serivce:createProduct", error);
    throw new Error(error);
  }
};
