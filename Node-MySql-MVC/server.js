const express = require("express");
const app = express();
const plansController = require("./controllers/plans-controller");
const subscriptionController = require("./controllers/subscription-controller");

app.use("/api/plan", plansController);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
