
$(document).ready(function() {

//Animate Header Text
var header = $("#header");

$('#wrapper').on('mouseenter', function() {
	header.animate({'opacity': 0}, 400, function() {
		header.text('Click the buttons or use your Keyboard');
	  }).animate({'opacity': 1}, 700);
  });


  //Beginning variables
	var firstNumber = "";
	var nextNumber = "";
	var operator = "";
	var screen = $("#screen");

	//Start with screen reading 0
	screen.text("0");

	//Keeps number length below 9 or returns error
	var testNumLength = function(x) {
		if (x.length > 9) {
			screen.text("Error");
			screen.css("color", "red")
			$("#header").text("Number too long!")
		}
	};

	//Main button functionality
	$('.number').on('click', function() {
		firstNumber += $(this).text();
		console.log(firstNumber);
		screen.text(firstNumber);
		testNumLength(firstNumber);
	});

	//Operator button functionality
	$(".operator").not("#equals").on('click', function(){
		operator = $(this).text();
		console.log(operator);
		nextNumber = firstNumber;
		firstNumber = "";
		screen.append(operator);
	});

	//Clear All Button
	$("#clearAll").on('click', function() {
		screen.text("0");
		screen.css("color", "black")
		header.text("Feed me numbers");
		firstNumber = "";
		nextNumber = "";
	});

	//Clears last entry
	$("#clearEntry").on('click', function() {
		screen.text("0");
		screen.css("color", "black")
		$("#header").text("Feed me numbers");
		firstNumber = "";
	});

	//Mathematical Functions
	//On Equals button press
	$("#equals").on('click', function(){
		//Change string into floating numbers
		var a = parseFloat(nextNumber);
		var b = parseFloat(firstNumber);

		if(operator === "*"){
			var answer = a * b;
		}else if(operator ==="/"){
			var answer = a / b;
		}else if(operator ==="+"){
			var answer = a + b;
		}else if(operator ==="-"){
			var answer = a - b;
		}
	   //change answer back to string and check if it fits the screen
	   var answer = answer.toString();
	   firstNumber = answer;
	   screen.text(answer);
	   testNumLength(answer);
	   console.log(answer);
	   return;
	});


var keyCodeMap = {
  49: $("#one"),
  50: $("#two"),
  51: $("#three"),
  52: $("#four"),
  53: $("#five"),
  54: $("#six"),
  55: $("#seven"),
  56: $("#eight"),
  57: $("#nine"),
  48: $("#zero"),
  13: $("#equals"),
  43: $("#plus"),
  45: $("#minus"),
  42: $("#times"),
  120: $("#times"),
  47: $("#divide"),
  46: $("#point")
};
$(document).keypress(function(event){
  var keycode = event.which;
 keyCodeMap[keycode].click();
 });

	//Keydown function for Backspace
	$(document).keydown(function(event){
		var keycode = event.which;
		if (keycode === 8) {
			$("#clearAll").click();
		}
	});
}); //end document ready function
