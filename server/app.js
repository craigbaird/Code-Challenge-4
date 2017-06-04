var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var db = require("./modules/db");
var listings = require("./routes/listings");

app.set("port", (process.env.port || 5000));

app.use(express.static("./server/public"));
app.use("/listings", listings);
app.get("/", function(req, res){                            // added .get route to get info from index.html
  res.sendFile(path.resolve("./client/views/index.html"));  // added res.sendFile to resolve path which is required on line 3
});

app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get("port"), function(req,res){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
