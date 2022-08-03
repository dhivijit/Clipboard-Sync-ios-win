//esversion:6
const express = require("express");
const app = express();
const ip = require("ip");
const bodyParser = require("body-parser");
var ncp = require("node-clipboardy");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/ios", (req, res) => {
  ncp.writeSync(req.body.clipfromuser);
  console.log("Received");
  res.send("Sent");
});

app.get("/windows", (req, res) => {
  var winclip = ncp.readSync();
  res.send(winclip);
  console.log("Sent");
});

app.listen(4541, function () {
  console.log("Server is running on port 4541");
  console.log("Your IP address is " + ip.address());
});
