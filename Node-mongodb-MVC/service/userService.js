const User = require("../database/models/userModel");
const constant = require("../constants");
const bcrypt = require("bcrypt");
const { formatMongoData } = require("../helper/DBhelper");
const jwt = require("jsonwebtoken");

module.exports.userSignup = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error(constant.userMessage.DUPLICATE_USER);
    }
    password = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password });
    let result = await newUser.save();
    return formatMongoData(result);
  } catch (error) {
    // console.log("something went Wrong: UserSingupService", error);
    throw new Error(error);
  }
};

module.exports.userLoginService = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(constant.userMessage.USER_NOT_FOUND);
    }
    const isvalid = await bcrypt.compare(password, user.password);
    console.log(isvalid);
    if (!isvalid) {
      throw new Error(constant.userMessage.INVALID_PASSWORD);
    }
    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || "my-secret",
      { expiresIn: "1d" }
    );
    return { token };
  } catch (error) {
    // console.log("something went Wrong: userLoginService", error);
    throw new Error(error);
  }
};
