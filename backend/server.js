const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
dotenv.config({ path: "config.env" });
app.use(express.urlencoded({ extended: true }));
const Article = require("./models/articleSchema")
//connect to db


mongoose
  .connect(process.env.DB_URI)
  .then((conn) => {
    console.log(`Database Connected:${conn.connection.host}`);
  })
  .catch((err) => {
    console.error(`Database Error: ${err}`);
    process.exit(1);
  });

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
  console.log(`mode:${process.env.NODE_ENV}`);
}


app.get("/fetchdata", (req, res) => {
  Article.find().then((res) => {
console.log(res)
  }).catch((err) => {
console.log(err)
  })
});
app.get("/", (req, res) => {
  res.send("API v2");
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} `);
});


