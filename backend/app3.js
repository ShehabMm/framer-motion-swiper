const express = require("express");
const app = express();
const port = 8080;

const mongoose = require("mongodb+srv://shehab:12345678910@cluster0.ltfvz.mongodb.net/AllData?retryWrites=true&w=majority");

mongoose.connect("connection link")
.then((res) => {
  
})


.catch((err) => {      console.log(err)   });





app.get("/", (req, res) => {
  res.send("Hello shehab!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
