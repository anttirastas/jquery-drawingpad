$(document).ready(function() {
	/*Create button and container div */
	var $button = $("<button type='button'>Click here!</button>");
	$($button).css("float","left").appendTo('body');
	$('<div></div>').css("clear","both").appendTo('body');
	var $container = $("<div></div>").css("float","left");
	$('body').append($container);
	/* Define and call function to create 16 columns of divs in one row*/
	var createDivs = function(sideLength) {	
		for (x = 0; x < sideLength; x++) {
			for (y = 0; y < sideLength; y++) {
				$("<div></div>").addClass("box").appendTo($container);
			}
			$("<div></div>").css("clear","both").appendTo($container);
		}
	};
	createDivs(64);
	$(".box").mouseover(function() {
		$(this).css("background-color","yellow");
	});
});