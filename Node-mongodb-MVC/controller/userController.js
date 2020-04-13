const constants = require("../constants/index");
const userService = require("../service/userService");

module.exports.signup = async (req, res) => {
  let response = { ...constants.defaultServerResponse }; //Coping of an object
  try {
    const responseFromtheService = await userService.userSignup(req.body);
    response.status = 200;
    (response.message = constants.userMessage.SIGNUP_SUCCESS),
      (response.body = responseFromtheService);
  } catch (error) {
    response.message = error.message;
    //  console.log("Something Went Wrong: Controller:signup", error);
  }
  return res.status(response.status).send(response);
};

module.exports.userLogin = async (req, res) => {
  let response = { ...constants.defaultServerResponse }; //Coping of an object
  try {
    const responseFromtheService = await userService.userLoginService(req.body);
    response.status = 200;
    (response.message = constants.userMessage.LOGIN_SUCCESS),
      (response.body = responseFromtheService);
  } catch (error) {
    response.message = error.message;
    //  console.log("Something Went Wrong: Controller:userLogin", error);
  }
  return res.status(response.status).send(response);
};
