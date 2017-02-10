$(document).ready(function() {
	/* Declare global variables */
	var userInput = 6;


	/* Create button above container div */
	var $button = $("<button type='button'>Click here!</button>");
	$($button).css("float","left").appendTo('body');
	$('<div></div>').css("clear","both").appendTo('body');

	
	/* Create container div*/
	var $container = $("<div></div>").css("float","left").width("960px").height("960px");
	var $cWidth = $container.width;
	var $cHeight = $container.height;
	$("body").append($container);

	/* Define function to create divs inside container*/
	var createDivs = function(amountBoxes) {	
		for (x = 0; x < amountBoxes; x++) {
			for (y = 0; y < amountBoxes; y++) {
				$("<div></div>").addClass("box").appendTo($container);
			}
			$("<div></div>").css("clear","both").appendTo($container);
		}
	};


	/* Call the function createDivs to create a 16x16 grid upon page loading */
	createDivs(userInput);


	/* Define function to change divs to yellow when mouse hovers over them */
	$(".box").mouseover(function() {
		$(this).css("background-color","yellow");
	});


	/* Define a function to clear the current grid and ask user what
	size of grid to create next */
	$($button).click(function() {
		$($container).empty();
		userInput = prompt("Please enter the amount of boxes for each side of the grid");
		var boxWidth = 960/userInput;
		var boxHeight = 960/userInput;
		createDivs(userInput);
		$(".box").width(boxWidth + 'px');
		$(".box").height(boxHeight + 'px');
		/* Define function to change divs to yellow when mouse hovers over them */
		$(".box").mouseover(function() {
		$(this).css("background-color","yellow");
		});
	});

});