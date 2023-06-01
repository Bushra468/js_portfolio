const express = require("express");
const index = express();

const port = 5000;

index.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// settings for static folders
index.use(express.static("public"));

// setting view engine
index.set("view engine", "ejs");

//home page
index.get("/", (req, res) => {
  res.render("index");
});
//cities page
index.get("/cities", (req, res) => {
  res.render("cities");
});
//personalities page
index.get("/personality", (req, res) => {
  res.render("personalities");
});
//contact page
index.get("/contact", (req, res) => {
  res.render("contact");
});
//tourist page
index.get("/tourist", (req, res) => {
  res.render("tourist");
});

