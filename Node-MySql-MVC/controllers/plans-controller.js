const router = require("express").Router();
const asyncWrapper = require("../utilites/async-wrapper").AsyncWrapper;

//api/plan [GET]
router.get(
  "/",
  asyncWrapper(async (req, res) => {
    res.send("hi");
  })
);

//api/plan/:id [GET]
router.get(
  "/:id",
  asyncWrapper(async (req, res) => {})
);

//api/plan [POST]
router.post(
  "/",
  asyncWrapper(async (req, res) => {})
);

//api/plan [DELETE]
router.delete(
  "/",
  asyncWrapper(async (req, res) => {})
);

module.exports = router;
