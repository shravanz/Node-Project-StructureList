const router = require("express").Router();
const asyncWrapper = require("../utilites/async-wrapper").AsyncWrapper;

//api/subscription [GET]
router.get(
  "/",
  asyncWrapper(async (req, res) => {})
);

//api/subscription/:id [GET]
router.get(
  "/:id",
  asyncWrapper(async (req, res) => {})
);

//api/subscription [POST]
router.post(
  "/",
  asyncWrapper(async (req, res) => {})
);

//api/subscription [DELETE]
router.delete(
  "/",
  asyncWrapper(async (req, res) => {})
);

module.exports = router;
