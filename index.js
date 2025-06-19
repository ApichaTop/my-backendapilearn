const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.routes");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to get the data from the form

//routes
app.use("/api/products",productRoute);

mongoose
  .connect(
    "mongodb+srv://apichawork14994:JHXnrWGd1MrZ1TRx@backendapi.alsk5ob.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendApi"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Error connecting to DB");
  });
