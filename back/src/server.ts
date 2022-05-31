console.log("About to start a server");

const express = require("express");

const truc = require("./truc");
console.log("truc: ", truc);

const app = express();

app.listen(3000, () => {
  console.log("Server started on port " + 3000);
});
