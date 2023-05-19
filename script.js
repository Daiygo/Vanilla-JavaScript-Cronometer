let time = 0
let cron = document.getElementById(`cron`)

function start() {
    interval = setInterval(() => {
      time++;
      showTime();
    }, 1000);
}

function stop() {
    clearInterval(interval)
}

function showTime() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    cron.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function reset() {
    clearInterval(interval);
    time = 0
    cron.innerHTML = `0:00`
}
