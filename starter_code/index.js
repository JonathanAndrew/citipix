


$(document).ready(function(){

//listen for an event when user clicks the submit button

	$('form').submit(submitCity);


//function to change background image

	function submitCity(){

		//prevent the page from reloading

		event.preventDefault();

		//select the input


		var currentCity = $('#city-type').val().toLowerCase();


		if(currentCity == "los angelos" || currentCity== "la" || currentCity== "lax" ) {
			$('body').css('background-image' , "url(images/la.jpg)");
			
			}

		else if(currentCity == "new york" || currentCity== "new york city" || currentCity== "nyc" ) {
			$('body').css('background-image' , "url(images/nyc.jpg)");
			}

		else if(currentCity == "san fransico" || currentCity== "sf" || currentCity== "bay area" ) {
			$('body').css('background-image' , "url(images/sf.jpg)");	
			}

		else if(currentCity == "austin" || currentCity== "atx" ) {
			$('body').css('background-image' , "url(images/austin.jpg)");
			}

 		else if(currentCity == "sydney" || currentCity== "syd" ) {
			$('body').css('background-image' , "url(images/sydney.jpg)");
			}
	}

//choose the background image of city

//show picture in background



});