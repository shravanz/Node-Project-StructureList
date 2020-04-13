const joi = require("@hapi/joi");

module.exports.signup = joi.object().keys({
  email: joi.string().required(),
  password: joi.string().required(),
});

module.exports.login = joi.object().keys({
  email: joi.string().required(),
  password: joi.string().required(),
});
