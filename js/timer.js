const timerValues = JSON.parse(localStorage.getItem("timerValues")) || [0, 0, 0];
const currentTime = document.querySelector("#current-time")
const music = new Audio('../src/music/1.mp3')
let timerState = true
const checking = () => {
    if (timerValues[0] === 0 && timerValues[1] === 0 && timerValues[2] === 0 ) {
        timerState = false
        music.play()
    }
}

function hoursCalculation() {
     if (timerValues[0] > 0 && timerState === false) {
        timerValues[0] -= 1
        currentTime.innerHTML = `${timerValues[0]}:${timerValues[1]}:${timerValues[2]}` 
    } else {
        clearInterval(hoursInt)
    }
} 

function minutesCalculation() {
    if (timerValues[1] > 0 && timerState === false) {
        timerValues[1] -= 1
        currentTime.innerHTML = `${timerValues[0]}:${timerValues[1]}:${timerValues[2]}` 
    } else {
        clearInterval(minutesInt)
    }
}

function secondsCalculation() {
    if (timerValues[2] > 0 && timerState === false) {
        timerValues[2] -= 1
        currentTime.innerHTML = `${timerValues[0]}:${timerValues[1]}:${timerValues[2]}` 
    } else {
        clearInterval(secondsInt)
    }
}

const hoursInt = setInterval(hoursCalculation(), 3600000)
const minutesInt = setInterval(minutesCalculation(), 60000)
const secondsInt = setInterval(() => {
    secondsCalculation()
    checking()
}, 1000)




