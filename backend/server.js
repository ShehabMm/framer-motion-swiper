const express = require("express");
const dotenv = require('dotenv');
const morgan =require('morgan')
const app = express();
dotenv.config({path:'config.env'})


if(process.env.NODE_ENV == 'development'){
  app.use(morgan("dev"));
console.log('mode: ${process.env.NODE_ENV}');
}

app.get("/", (req, res) => {
  res.send("API v2");
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} `)
})





