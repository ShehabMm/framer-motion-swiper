const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
dotenv.config({ path: "config.env" });
app.use(express.urlencoded({ extended: true }));
const Article = require("./models/articleSchema");

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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} `);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/Article", (req, res) => {
  res.send("hello world");

  Article.find()
    .then((result) => {console.log(result, "done")})
    .catch((params) => {});
});
