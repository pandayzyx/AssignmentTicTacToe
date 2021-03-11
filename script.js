var attach_all_div;
var divs;
var setVariable;
var i = 1;
var grid_box = document.getElementById("grid_box");
var c = 0;
var counter = 0;
var x;
var bdy = document.querySelector("body");
var display_result1 = document.getElementById("diplay_result1");
var z = document.getElementsByClassName("class1");
let btn =   document.getElementById('Start')
btn.addEventListener('click',Start)
alert("js script loaded")

//Function to click all the tictactoe boxes autmatically

function click_boxes(){
	setVariable  = setInterval(()=>{
		 let randomNumber  = Math.floor(Math.random() * 9) + 1  
		 let randomDiv  =  document.getElementById(`id${randomNumber}`)
		 randomDiv.click()
		 if(randomDiv.textContent != ""){
			 randomDiv.click()
			 change_things
		 }
	   },300)

}

//Function to create div for making table(boxmaking for grid)
function create_div() {
    alert("js script loaded")
	for (i = 1; i < 10; i++) {
		var divs = document.createElement("div");
		divs.setAttribute("class", "class1");
		divs.setAttribute("id", "id" + i);
		divs.setAttribute('data-test',"test-div")
		divs.addEventListener("click", change_things);
		divs.addEventListener("click", check_winner);
		divs.addEventListener("click", check_draw);
		grid_box.appendChild(divs);
		divs.style.height = "100px";
	}
}
window.addEventListener('load',create_div)


//Function to take input from user(to store x and 0)
function user_input(x, y) {
	if (y % 2 != 0) {
		x.innerHTML = "X";
		x.style.color = "Black";
	} else {
		x.innerHTML = "0";
		x.style.color = "White";
	}
}











