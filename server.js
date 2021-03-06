var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use("/css", express.static("public/css"));
app.use("/scripts", express.static("public/scripts"));
app.use("/images", express.static("public/images"));

app.get("/", function(req, res){
  res.sendFile(process.cwd() + "/views/home.html");
});

app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
}); 