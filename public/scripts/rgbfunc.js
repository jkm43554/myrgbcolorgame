

var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisp = document.getElementById("colorDisp");
var mesDisp = document.querySelector("#message");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var resetButton = document.querySelector("#reset");
var numSquares = 6;
var modeButtons = document.querySelectorAll(".mode");

init();


function init(){
	setupModeButtons();
	setupSquares();
	reset();
}



function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}
		reset();
	});
}
}

colorDisp.textContent = pickedColor;

function setupSquares(){	
for(var i=0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
			
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			mesDisp.textContent = "Correct";
			resetButton.textContent = "play again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else{
			this.style.backgroundColor = "#232323";
			mesDisp.textContent = "Try Again";
		}
	});
}
}



function changeColors(color){
	for( var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());

	}
	//return that array
	return arr;
}

function randomColor(){
	//red
	var r = Math.floor(Math.random()*256);
	//green
	var g = Math.floor(Math.random()*256);
	//blue
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


function reset(){
	colors = generateRandomColors(numSquares);
	//new rando color
	pickedColor = pickColor();
	colorDisp.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	mesDisp.textContent = "";
	//,atch 
	//change color of squares
	for( var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}	else{
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "pink";
	this.textContent = "New Colors";
}


resetButton.addEventListener("click", function(){
	//generate all new colors
	reset();
});
