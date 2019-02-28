var express = require("express"); 
//var methodOverride = require("method-override"); 
var bodyParser = require("body-parser"); 

var port = process.env.PORT || 3000; 

var app = express();

app.use(express.static("public")); 

app.use(bodyParser.urlencoded({ extended: false })); 

var exphbs = require("express-handlebars"); 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 

//import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js"); 

app.use("/", routes); 

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
