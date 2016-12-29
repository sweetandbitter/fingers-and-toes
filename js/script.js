var figure = document.getElementById("figure");
var toe = document.getElementById("toe")
var start = document.getElementById("start-btn");
var restart = document.getElementById("restart-btn");
var reset = document.getElementById("reset-btn");

start.addEventListener("click", startTimer);
restart.addEventListener("click", restartTimer);
reset.addEventListener("click", resetTimer);

function startTimer(){
	var timeStop = parseInt(document.getElementById("num").value);
	timeCount(timeStop);
}

function restartTimer(){

}

function resetTimer(){

}

function timeCount(timeStop){
	clearInterval(timer);
	var timeNow = 0;
	var displayNum = document.getElementById("display-number");
 	var timer = setInterval(count, 1000)
 	function count(){
 		timeNow++;
 		console.log(timeNow, timeStop)
 		if(timeNow > timeStop){
 			clearInterval(timer);
 		} else {
 			if(timeNow % 3 === 0  && timeNow %5 === 0){
	 			figure.style.color = "red";
	 			toe.style.color = "red";
	 		} else if (timeNow % 3 === 0){
	 			figure.style.color = "red";
	 			toe.style.color = "black";
	 		} else if(timeNow % 5 === 0){
	 			figure.style.color = "black";
	 			toe.style.color = "red";
	 		} else {
	 			figure.style.color = "black";
	 			toe.style.color = "black";
	 		}
	 		displayNum.innerHTML = timeNow;
 		}
 		
 	}
}

