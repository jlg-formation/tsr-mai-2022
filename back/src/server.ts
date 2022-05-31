console.log("About to start a server");

const express = require("express");

const truc = require("./truc");
console.log("truc: ", truc);

const app = express();

const port: number = 3000;

app.listen(port, () => {
  console.log("Server started on port " + port);
});
