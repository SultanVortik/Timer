const timerValues = JSON.parse(localStorage.getItem("timerValues")) || [0, 0, 0];
const resetValues = JSON.parse(localStorage.getItem("resetValues")) || [0, 0, 0];
const currentTime = document.querySelector("#current-time");
const timerBlock = document.querySelector(".main_timer");
const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const btnReset = document.querySelector(".reset");
currentTime.innerHTML = `${timerValues[0]}:${timerValues[1]}:${timerValues[2]}`
const music = new Audio('../src/music/1.mp3');
const checking = () => {
    if (timerValues[0] === 0 && timerValues[1] === 0 && timerValues[2] === 0 ) {
        music.play()
    }
}

function hoursCalculation() {
     if (timerValues[0] > 0 && timerValues[1] === 0, timerValues[2] === 0) {
        timerValues[0] -= 1
        timerValues[1] = 60  
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
    } else if(timerValues[1] === 0 && timerValues[0] > 0 ) {
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
        console.log(timerValues)
    } else if (timerValues[2] === 0 && timerValues[1] > 0) {
        minutesCalculation()
    } else if (timerValues[0] > 0 && timerValues[1] === 0 && timerValues[2] === 0) {
        hoursCalculation()
    } else if (timerValues[0] === 0 && timerValues[1] === 0 && timerValues[2] === 0 ) {
        const musicInt = setInterval(() => {
            music.play()
        }, 3000);
        clearInterval(secondsInt)
        timerBlock.classList.remove('timer-start')
        btnPause.addEventListener("click", () => {
            clearInterval(musicInt)
            btnPause.removeEventListener("click", clearInterval(musicInt))
        })
    } else {
        clearInterval(secondsInt)
    }
}

let secondsInt;
console.log(secondsInt)

function playTimer() {
    if (secondsInt === undefined) {
        const timerValues = JSON.parse(localStorage.getItem("timerValues")) 
        secondsInt = setInterval(() => {
            secondsCalculation()
        }, 1000)
        console.log(secondsInt)
    } else {
        console.log(secondsInt)
        return
    }
}

function stopTimer() {
    const stopValue = [
        timerValues[0],
        timerValues[1], 
        timerValues[2]
    ]
    clearInterval(secondsInt)
    secondsInt = undefined
    console.log(secondsInt)
    timerBlock.classList.remove('timer-start')
    localStorage.setItem("timerValues", `[${stopValue}]`)
    currentTime.innerHTML = `${timerValues[0]}:${timerValues[1]}:${timerValues[2]}`
}

function resetTimer() {
    localStorage.setItem("timerValues", `[${resetValues}]`)
    currentTime.innerHTML = `${timerValues[0]}:${timerValues[1]}:${timerValues[2]}`
    window.location.reload()
    console.log(resetValues)
    playTimer()
}



btnStart.addEventListener("click", playTimer)
btnPause.addEventListener("click", stopTimer)
btnReset.addEventListener("click", resetTimer)
playTimer()







