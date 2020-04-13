const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  {
    timestamps: true,
    toObject: {
      transform: function (doc, ret, options) {
        ret.UserID = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    }, // tranform the document
  }
);

module.exports = mongoose.model("User", userSchema);
