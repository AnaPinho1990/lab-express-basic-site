const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  console.log("server reached");
  res.sendFile(__dirname + "/public/views/home.html");
});
app.get("/about", (req, res, next) => {
  console.log("server reached");
  res.sendFile(__dirname + "/public/views/About.html");
});

app.get("/works", (req, res, next) => {
  console.log("server reached");
  res.sendFile(__dirname + "/public/views/Works.html");
});

app.listen(3000, () => console.log("Server running on port 3000"));
