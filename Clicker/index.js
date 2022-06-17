let clicks = 1;
const timeout = 5000;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = start;

function start(){
    const startTime = Date.now();

    display.textContent = timeout;
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(timeout - delta);
    }, 100);
    
    const timeoutt = setTimeout(() => {
        button.onclick = null;
        display.textContent = "Game Over";
        button.onclick = refresh();
        clearInterval(interval);
        clearTimeout(timeoutt,timeout);
    }, timeout);
}

function refresh(){
    setTimeout(function (){
		location.reload();
	}, 1000);
}



function formatTime(ms){
    return Number.parseFloat(ms/1000).toFixed(2);
}
