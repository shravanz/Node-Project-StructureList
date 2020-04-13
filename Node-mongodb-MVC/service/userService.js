const User = require("../database/models/userModel");
const constant = require("../constants");
const bcrypt = require("bcrypt");
const { formatMongoData } = require("../helper/DBhelper");

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
