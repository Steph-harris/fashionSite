var express = require("express");
var app = express();
var PORT = process.env.NODE_ENV || 8080;

app.use("/css", express.static("public/css"));
app.use("/js", express.static("public/js"));

app.get("/", function(req, res){
  res.sendFile(process.cwd() + "/views/home.html");
});

app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
});