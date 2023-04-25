const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");


// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send("Hello api!");
});




mongoose
  .connect(
    "mongodb://shehab:12345678910@cluster0-shard-00-00.ltfvz.mongodb.net:27017,cluster0-shard-00-01.ltfvz.mongodb.net:27017,cluster0-shard-00-02.ltfvz.mongodb.net:27017/ecoomercedb?ssl=true&replicaSet=atlas-y3lm03-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then((result) => {console.log("Connected to mongodb successfully")
  app.listen(port, () => {
    console.log(`Node app is running on port ${port}`);
  });
  
})
  .catch((err) => {
    console.log(err)
  });
