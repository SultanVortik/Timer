const timerValues = JSON.parse(localStorage.getItem("timerValues")) || [0, 0, 0];
const currentTime = document.querySelector("#current-time");
const timerBlock = document.querySelector(".main_timer")
currentTime.innerHTML = `${timerValues[0]}:${timerValues[1]}:${timerValues[2]}`
const music = new Audio('../src/music/1.mp3');
const checking = () => {
    if (timerValues[0] === 0 && timerValues[1] === 0 && timerValues[2] === 0 ) {
        music.play()
    }
}


// function timerCalculations() {
//     if (seconds > 0 ) {
//         seconds -= 1
//     } else if (seconds === 0) {
//         seconds == 60
//     }  

// }
// Тестовая версия
function hoursCalculation() {
     if (timerValues[0] > 0) {
        timerValues[0] -= 1
        timerValues[2] = 59
        currentTime.innerHTML = `${timerValues[0]}:${timerValues[1]}:${timerValues[2]}` 
    } else {
        clearInterval(secondsInt)
    }
} 

function minutesCalculation() {
    if (timerValues[1] > 0) {
        timerValues[1] -= 1
        timerValues[2] = 59
        currentTime.innerHTML = `${timerValues[0]}:${timerValues[1]}:${timerValues[2]}` 
    } else if(timerValues[1] === 0 && timerValues[0] > 0) {
        hoursCalculation()
    } else {
        clearInterval(secondsInt)
    }
}

function secondsCalculation() {
    if (timerValues[2] > 0 ) {
        timerValues[2] -= 1
        currentTime.innerHTML = `${timerValues[0]}:${timerValues[1]}:${timerValues[2]}`
        timerBlock.classList.add('timer-start') 
    } else if(timerValues[2] === 0 && timerValues[1] > 0) {
        minutesCalculation()
    } else if (timerValues[0] === 0 && timerValues[1] === 0 && timerValues[2] === 0 ) {
        music.play()
        clearInterval(secondsInt)
        timerBlock.classList.remove('timer-start')
    } else {
        clearInterval(secondsInt)
    }
}

// const hoursInt = setInterval(() => {
//     hoursCalculation()
// }, 3600000)
// const minutesInt = setInterval(() => {
//     minutesCalculation()
// }, 60000)
const secondsInt = setInterval(() => {
    secondsCalculation()
}, 1000)





