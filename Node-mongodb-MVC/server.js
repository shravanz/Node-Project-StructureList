const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./database/connection");
dotEnv.config();

const app = express();

// DB Connectivity
dbConnection();

// CORS middleware
app.use(cors());

// Request Payload Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/product", require("./routes/productRoutes"));

app.get("/", (req, res, next) => {
  res.send("Hello from Express");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Listening on PORT ${PORT}`);
});

//Error Handling Middleware Global
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});
