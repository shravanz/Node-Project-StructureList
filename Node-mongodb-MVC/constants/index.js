module.exports = {
  defaultServerResponse: {
    status: 400,
    message: "",
    body: {},
  },
  productMessage: {
    PRODUCT_CREATED: "product created Successfully",
    PRODUCT_FETCHED: "product Fetched successfully",
    PRODUCT_NOT_FOUND: "Product not Found",
    PRODUCT_UPDATED: "Product update Successfully",
    PRODUCT_DELETED: "Product Deleted successfully",
  },
  userMessage: {
    SIGNUP_SUCCESS: "Signup successfully",
    DUPLICATE_USER: "User already exists with given email",
    LOGIN_SUCCESS: "Login Successfully",
    USER_NOT_FOUND: "user not found",
    INVALID_PASSWORD: "Invalid Password",
  },
  requestValidationMessage: {
    BAD_REQUEST: "Invalid Fields",
    TOKEN_MISSING: "Token Missing from header",
  },
  databaseMessage: {
    INVALID_ID: "Invalid Id",
  },
};
