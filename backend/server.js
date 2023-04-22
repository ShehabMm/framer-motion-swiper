const express = require("express");
const dotenv = require('dotenv');
const app = express();
dotenv.config({path:'config.env'})
app.get("/", (req, res) => {
  res.send("API v2");
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} `)
})





