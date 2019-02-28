var express = require("express"); 
var router = express.Router(); 

var burger = require("../models/burger.js"); 

router.get("/", function(req, res) {
	//this gets all the burgers from the database
	burger.all(function(data) {
		var hbsObject = {
			burger: data
		}; 
		console.log(hbsObject); 
		res.render("index", hbsObject); 
	});
});

router.post("/api/burger", function(req, res) {
	//this will allow the user to add a burger

	console.log(req.body.burger_name); 

	burger.create(["burger_name"], [req.body.burger_name], function(result) {
		res.json({ id: result.insertId });
	});
}); 

router.put("/api/burgers/:id", function(req, res) {
	//this will allow the user to devour the burger 
	var condition = "id = " + req.params.id;

	console.log("condition", condition); 
	console.log(req.body.devoured); 

	burger.update({
		devoured: req.body.devoured
	}, condition, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end(); 
		} else {
			res.status(200).end(); 
		}
	});
});

module.exports = router; 