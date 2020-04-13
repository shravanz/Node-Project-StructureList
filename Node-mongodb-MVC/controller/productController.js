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

module.exports.getProducts = async (req, res) => {
  let response = { ...constants.defaultServerResponse }; //Coping of an object
  try {
    const responseFromtheService = await productService.getAllProducts(
      req.query
    );
    response.status = 200;
    (response.message = constants.productMessage.PRODUCT_FETCHED),
      (response.body = responseFromtheService);
  } catch (error) {
    response.message = error.message;
    console.log("Something Went Wrong: Controller:getAllProducts", error);
  }
  return res.status(response.status).send(response);
};

module.exports.getProductById = async (req, res) => {
  let response = { ...constants.defaultServerResponse }; //Coping of an object
  try {
    const responseFromtheService = await productService.getProductById(
      req.params
    );
    response.status = 200;
    (response.message = constants.productMessage.PRODUCT_FETCHED),
      (response.body = responseFromtheService);
  } catch (error) {
    response.message = error.message;
    // console.log("Something Went Wrong: Controller: getProductById", error);
  }
  return res.status(response.status).send(response);
};

module.exports.updateProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse }; //Coping of an object
  try {
    const responseFromtheService = await productService.updateProductService({
      id: req.params.id,
      updateInfo: req.body,
    });
    response.status = 200;
    (response.message = constants.productMessage.PRODUCT_UPDATED),
      (response.body = responseFromtheService);
  } catch (error) {
    response.message = error.message;
    // console.log("Something Went Wrong: Controller:updateProduct", error);
  }
  return res.status(response.status).send(response);
};

module.exports.deleteProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse }; //Coping of an object
  try {
    const responseFromtheService = await productService.deleteProductService({
      id: req.params.id,
    });
    response.status = 200;
    (response.message = constants.productMessage.PRODUCT_DELETED),
      (response.body = responseFromtheService);
  } catch (error) {
    response.message = error.message;
    // console.log("Something Went Wrong: Controller:deleteProduct", error);
  }
  return res.status(response.status).send(response);
};
