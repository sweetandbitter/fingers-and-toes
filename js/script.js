var finger = document.getElementById("finger");
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
	var timeStop = Number(document.getElementById("num").value);
	if(!isValidate(timeStop)){
		return;
	}
	timeCount(timeStop);
}

function restartTimer(){
	displayNum.innerHTML = 0;
	var timeStop = parseInt(document.getElementById("num").value);
	if(!isValidate(timeStop)){
		return;
	}
	timeCount(timeStop);
}

function resetTimer(){
	clearAllIntervals();
	document.getElementById("num").value = 0;
	displayNum.innerHTML = 0;
	finger.style.color = "black";
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
	finger.style.color = "red";
	toe.style.color = "red";
 	var timer = setInterval(count, 1000);
 	function count(){
 		timeNow++;
 		console.log(timeNow, timeStop)
 		if(timeNow > timeStop){
 			clearInterval(timer);
 			start.disabled = false;
 		} else {
 			if(timeNow % 3 === 0  && timeNow %5 === 0){
	 			finger.style.color = "red";
	 			toe.style.color = "red";
	 		} else if (timeNow % 3 === 0){
	 			finger.style.color = "red";
	 			toe.style.color = "black";
	 		} else if(timeNow % 5 === 0){
	 			finger.style.color = "black";
	 			toe.style.color = "red";
	 		} else {
	 			finger.style.color = "black";
	 			toe.style.color = "black";
	 		}
	 		displayNum.innerHTML = timeNow;
 		}
 		
 	}
}

function isValidate(num){
	if (num === ""){
		alert("input can not be empty");
		return false;
	}
	if (!Number.isInteger(num)){
		alert("Input is not a Integer");
		return false;
	}
	if(num < 0){
		alert("Input should be a non-negative integer.");
		return false;
	}
	return true;
}