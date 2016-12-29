var figure = document.getElementById("figure");
var toe = document.getElementById("toe")
var start = document.getElementById("start-btn");
var restart = document.getElementById("restart-btn");
var reset = document.getElementById("reset-btn");
var displayNum = document.getElementById("display-number");


start.addEventListener("click", startTimer);
restart.addEventListener("click", restartTimer);
reset.addEventListener("click", resetTimer);

function startTimer(){
	displayNum.innerHTML = 0;
	var timeStop = parseInt(document.getElementById("num").value);
	timeCount(timeStop);
}

function restartTimer(){
	displayNum.innerHTML = 0;
	var timeStop = parseInt(document.getElementById("num").value);
	timeCount(timeStop);
}

function resetTimer(){
	clearAllIntervals();
	document.getElementById("num").value = 0;
	displayNum.innerHTML = 0;
	figure.style.color = "black";
	toe.style.color = "black";
	start.disabled = false;
}

function clearAllIntervals() {
    for (var i = 1; i < 99999; i++) {
        clearInterval(i);
    }
}

function timeCount(timeStop){
	clearAllIntervals();
	var timeNow = 0;
	start.disabled = true;
 	var timer = setInterval(count, 1000);
 	function count(){
 		timeNow++;
 		console.log(timeNow, timeStop)
 		if(timeNow > timeStop){
 			clearInterval(timer);
 			start.disabled = false;
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

