const pomodoroValuesWork = JSON.parse(localStorage.getItem("pomodoroValuesWork"))
const pomodoroValuesBreak = JSON.parse(localStorage.getItem("pomodoroValuesBreak"))
const resetPomodoroValuesBreak = JSON.parse(localStorage.getItem("resetPomodoroValuesBreak"))
const resetPomodoroValuesWork = JSON.parse(localStorage.getItem("resetPomodoroValuesWork"))
const localStorageSettings = JSON.parse(localStorage.getItem('settingsObj'))
const pomodoroTime = document.querySelector("#pomodoro-time")
const timerTitle = document.querySelector('.timer-title')
const timerBlock = document.querySelector(".main_timer");
const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const btnReset = document.querySelector(".reset");
timerBlock.classList.add('timer-start')
pomodoroTime.innerHTML = `${pomodoroValuesWork[0]}:${pomodoroValuesWork[1]}`
const music = new Audio(`${localStorageSettings.music}`);

let pomodoroInt 
let isFinished = false;

function workTimeCalculation() {
    timerTitle.innerHTML = 'Work Time'
    if (pomodoroValuesWork[1] > 0) {
        pomodoroValuesWork[1] -= 1
        pomodoroTime.innerHTML = `${pomodoroValuesWork[0]}:${pomodoroValuesWork[1]}`
    } else if (pomodoroValuesWork[1] === 0 && pomodoroValuesWork[0] > 0) {
        pomodoroValuesWork[0]--
        pomodoroValuesWork[1] = 59
    } else if(pomodoroValuesWork[0] === 0 && pomodoroValuesWork[1] === 0 && !isFinished) {
        isFinished = true
        setTimeout(() => {
           music.play() 
        }, 100);
        setTimeout(() => {
            clearInterval(pomodoroInt)
            play(breakTimeCalculation)
            isFinished = false   
        }, 3000);
    }
}

function breakTimeCalculation() {
    timerTitle.innerHTML = 'Break Time'
    if (pomodoroValuesBreak[1] > 0) {
        pomodoroValuesBreak[1]--
        pomodoroTime.innerHTML = `${pomodoroValuesBreak[0]}:${pomodoroValuesBreak[1]}`
    } else if (pomodoroValuesBreak[1] === 0 && pomodoroValuesBreak[0] > 0) {
        pomodoroValuesBreak[0]--
        pomodoroValuesBreak[1] = 
        pomodoroTime.innerHTML = `${pomodoroValuesBreak[0]}:${pomodoroValuesBreak[1]}`
    } else if (pomodoroValuesBreak[0] === 0 && pomodoroValuesBreak[1] === 0 && !isFinished) {
        isFinished = true
        setTimeout(() => {
           music.play() 
        }, 100);
        setTimeout(() => {
            clearInterval(pomodoroInt)
            play(breakTimeCalculation)
            isFinished = false  
            window.location.reload()
        }, 3000);
    }
}

 function play(timer) {
    clearInterval(pomodoroInt)
    pomodoroInt = setInterval(() => {
        timer()
    }, 1000)
 }


function startTimer() {
    if (pomodoroInt === undefined && timerTitle.innerHTML === 'Work Time') {
        //const pomodoroValuesWork = JSON.parse(localStorage.getItem("pomodoroValuesWork"))
        play(workTimeCalculation)
        timerBlock.classList.add('timer-start')
    } else if (pomodoroInt === undefined && timerTitle.innerHTML === 'Break Time') {
        //const pomodoroValuesBreak = JSON.parse(localStorage.getItem("pomodoroValuesBreak"))
        play(breakTimeCalculation)
        timerBlock.classList.add('timer-start')
    } else {
        return
    }
}

function stopTimer() {
    if (timerTitle.innerHTML === 'Work Time') {
        const stopWorkValue = [
        pomodoroValuesWork[0],
        pomodoroValuesWork[1]
    ]
    timerBlock.classList.remove('timer-start')
    clearInterval(pomodoroInt)
    pomodoroInt = undefined
    localStorage.setItem("pomodoroValuesWork", `[${stopWorkValue}]`)
    pomodoroTime.innerHTML = `${pomodoroValuesWork[0]}:${pomodoroValuesWork[1]}`
    } else if (timerTitle.innerHTML === 'Break Time') {
        const stopBreakValue = [
        pomodoroValuesBreak[0],
        pomodoroValuesBreak[1]
    ]
    timerBlock.classList.remove('timer-start')
    clearInterval(pomodoroInt)
    pomodoroInt = undefined
    localStorage.setItem("pomodoroValuesWork", `[${stopBreakValue}]`)
    pomodoroTime.innerHTML = `${pomodoroValuesBreak[0]}:${pomodoroValuesBreak[1]}`
    }
}

function resetTimer() {
        localStorage.setItem("pomodoroValuesWork", `[${resetPomodoroValuesWork}]`)
        localStorage.setItem("pomodoroValuesBreak", `[${resetPomodoroValuesBreak}]`)
        pomodoroTime.innerHTML = `${pomodoroValuesWork[0]}:${pomodoroValuesWork[1]}`
        window.location.reload()
    }

function themeUse() {
    const localStorageSettings = JSON.parse(localStorage.getItem('settingsObj'))
    if (localStorageSettings.theme === 'light') {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#FFF8DC'
        body.style.setProperty('--text-color-light', 'black')
    } else {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#172c4b'
        body.style.setProperty('--text-color-light', 'white')
    }
}

themeUse()
btnStart.addEventListener('click', startTimer)
btnPause.addEventListener('click', stopTimer)
btnReset.addEventListener('click', resetTimer)
play(workTimeCalculation)