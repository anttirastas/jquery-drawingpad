$(document).ready(function() {
	/* Declare global variables */
	var sideLength = 10;
	var userInput = 6;


	/* Create button above container div */
	var $button = $("<button type='button'>Click here!</button>");
	$($button).css("float","left").appendTo('body');
	$('<div></div>').css("clear","both").appendTo('body');

	
	/* Create container div*/
	var $container = $("<div></div>").css("float","left");
	$("body").append($container);

	/* Define function to create divs inside container*/
	var createDivs = function(sideLength) {	
		for (x = 0; x < sideLength; x++) {
			for (y = 0; y < sideLength; y++) {
				$("<div></div>").addClass("box").appendTo($container);
			}
			$("<div></div>").css("clear","both").appendTo($container);
		}
	};


	/* Call the function createDivs to create a 16x16 grid upon page loading */
	createDivs(16);


	/* Define function to change divs to yellow when mouse hovers over them */
	$(".box").mouseover(function() {
		$(this).css("background-color","yellow");
	});


	/* Define a function to clear the current grid and ask user what
	size of grid to create next */
	$($button).click(function() {
		$($container).empty();
		userInput = prompt("Please enter the amount of boxes for each side of the grid");
		createDivs(userInput);
		/* Define function to change divs to yellow when mouse hovers over them */
		$(".box").mouseover(function() {
		$(this).css("background-color","yellow");
		});
	});

});