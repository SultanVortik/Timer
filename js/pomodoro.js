const pomodoroValuesWork = JSON.parse(localStorage.getItem("pomodoroValuesWork"))
const pomodoroValuesBreak = JSON.parse(localStorage.getItem("pomodoroValuesBreak"))
const resetPomodoroValuesBreak = JSON.parse(localStorage.getItem("resetPomodoroValuesBreak"))
const resetPomodoroValuesWork = JSON.parse(localStorage.getItem("resetPomodoroValuesWork"))
const pomodoroTime = document.querySelector("#pomodoro-time")
const timerTitle = document.querySelector('.timer-title')
const timerBlock = document.querySelector(".main_timer");
timerBlock.classList.add('timer-start')
pomodoroTime.innerHTML = `${pomodoroValuesWork[0]}:${pomodoroValuesWork[1]}`
const music = new Audio('../src/music/4.mp3');

let pomodoroInt 

function workTimeCalculation() {
    timerTitle.innerHTML = 'Work Time'
    if (pomodoroValuesWork[1] > 0) {
        pomodoroValuesWork[1] -= 1
        pomodoroTime.innerHTML = `${pomodoroValuesWork[0]}:${pomodoroValuesWork[1]}`
    } else if (pomodoroValuesWork[1] === 0 && pomodoroValuesWork[0] > 0) {
        pomodoroValuesWork[0]--
        pomodoroValuesWork[1] = 59
    } else if(pomodoroValuesWork[0] === 0 && pomodoroValuesWork[1] === 0) {
        setTimeout(() => {
           music.play() 
        }, 100);
        setTimeout(() => {
            clearInterval(pomodoroInt)
            play(breakTimeCalculation)    
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
    } else if (pomodoroValuesBreak[0] === 0 && pomodoroValuesBreak[1] === 0) {
        setTimeout(() => {
           music.play() 
        }, 100);
        setTimeout(() => {
            window.location.reload()
        }, 3000);
        clearInterval(pomodoroInt)
    }
}

 function play(timer) {
    pomodoroInt = setInterval(() => {
        timer()
    }, 1000)
 }

 play(workTimeCalculation)