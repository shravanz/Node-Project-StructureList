const joi = require("@hapi/joi");
const constants = require("../constants");

const validateObjectSchema = (data, schema) => {
  const result = schema.validate(data, { convert: false }); // for type convertion we set to false
  //   console.log("Joi Schema validation Result===", result);
  if (result.error) {
    const errorDetails = result.error.details.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });
    return errorDetails;
  }
  return null;
};

module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const error = validateObjectSchema(req.body, schema);
    if (error) {
      //If there is error according to joi schema it will stop the execution with error msg or pass to next middleware
      (response.body = error),
        (response.message = constants.requestValidationMessage.BAD_REQUEST);
      return res.status(response.status).send(response);
    }
    return next();
  };
};
