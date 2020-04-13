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
  },
  requestValidationMessage: {
    BAD_REQUEST: "Invalid Fields",
  },
  databaseMessage: {
    INVALID_ID: "Invalid Id",
  },
};
