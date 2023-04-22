const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require('mongoose');
const app = express();
dotenv.config({ path: "config.env" });

//connect to db

mongoose.connect(process.env.DB_URI).then((conn) => {
  console.log(`Database conncted: ${conn.conneciton.host}`)

}).catch((err) => {
  console.log(`Database Error: ${err}`)
process.exit(1)
})

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
  console.log(`mode:${process.env.NODE_ENV}`);
}

app.get("/", (req, res) => {
  res.send("API v2");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} `);
});
