const productService = require("../service/productService");
const constants = require("../constants/index");

module.exports.createProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse }; //Coping of an object
  try {
    const responseFromtheService = await productService.createProductService(
      req.body
    );
    response.status = 200;
    (response.message = constants.productMessage.PRODUCT_CREATED),
      (response.body = responseFromtheService);
  } catch (error) {
    response.message = error.message;
    console.log("Something Went Wrong: Controller:CreateProduct", error);
  }
  return res.status(response.status).send(response);
};
