
$(function() {
	console.log("Connected"); 

	$(".devour-burger").on("click", function(event) {
		
		var id = $(this).data("id"); 
		var devouredState = $(this).data("devour"); 

		var devoured = {
			devoured: true
		}; 

		//send the PUT request 
		$.ajax("/api/burgers/" + id, {
			type: "PUT", 
			data: devoured
		}).then(
			function() {
				console.log("changed devoured state to ", devouredState); 

				location.reload(); 
			}
		);
	});

	$("#post-new-burger").on("click", function(event) {
		event.preventDefault(); 

		var newBurger = {
			burger_name: $("#ca").val().trim()
		};

		console.log(newBurger);

		//send the POST request
		$.ajax("/api/burger", {
			type: "POST", 
			data: newBurger
		}).then(
			function() {
				console.log("created new burger");
				//reload the page to get the updated list
				location.reload();
			}
		);
	});



});