const timer = document.getElementById('timer');
const inputTime = document.getElementById('input-time');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

let time = 0;
let intervalId;

function updateTime() {
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;
	
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;
	
	timer.innerHTML = `${minutes}:${seconds}`;
}

function startTimer() {
	time = inputTime.value;
	if (time <= 0) return;
	
	intervalId = setInterval(() => {
		time--;
		updateTime();
		if (time <= 0) clearInterval(intervalId);
	}, 1000);
	
	startBtn.disabled = true;
	inputTime.disabled = true;
}

function pauseTimer() {
	clearInterval(intervalId);
	startBtn.disabled = false;
}

function resetTimer() {
	clearInterval(intervalId);
	time = 0;
	updateTime();
	startBtn.disabled = false;
	inputTime.disabled = false;
	inputTime.value = "";
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
