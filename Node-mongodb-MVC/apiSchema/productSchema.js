const joi = require("@hapi/joi");

module.exports.createProductSchema = joi.object().keys({
  name: joi.string().required(),
  price: joi.number().required(),
  brand: joi.string().required(),
});

module.exports.getAllProductSchema = joi.object().keys({
  skip: joi.string(),
  limit: joi.string(),
});

module.exports.updateProductSchema = joi.object().keys({
  name: joi.string(),
  price: joi.number(),
  brand: joi.string(),
});
