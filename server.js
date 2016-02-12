var express = require("express");
var app = express();
var PORT = process.env.NODE_ENV || 8080;

app.use("/css", express.static("public/css"));
app.use("/js", express.static("public/js"));

app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
});