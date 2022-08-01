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

app
  .route("/copy")
  .get((req, res) => {
    res.send(
      '<form action="/copy" method="post"><input type="text" name="clipfromuser" id="clipfromuser"><input type="submit" value=""></form>'
    );
  })
  .post((req, res) => {
    ncp.writeSync(req.body.clipfromuser);
    console.log("Copied");
    res.send("Copied");
  });

app.listen(4541, function () {
  console.log("Server is running on port 4541");
  console.log("Your local IP address is " + ip.address());
});
