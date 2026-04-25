const inputHours = document.getElementById("hours")
const inputMinutes = document.getElementById("minutes")
const inputSeconds = document.getElementById("seconds")
const setTimerBtn = document.querySelector("#set-timer-btn")
const cancelBtn = document.querySelector(".cancel")


//Functions

function setTimerValues() {
    if (inputHours.value < 0 || inputMinutes.value < 0 || inputSeconds.value < 0) {
        window.alert("значение не должно равняться 0 или меньше")
    } else if (inputHours.value == 0 && inputMinutes.value == 0 && inputSeconds.value == 0){
        window.alert("значение не должно равняться 0 или меньше")
    } else if (inputHours.value < 0 ) {
        window.alert("некоректные часы")
    } else if (inputMinutes.value > 60) {
        window.alert("некоректные минуты")
    } else if (inputSeconds.value > 60) {
        window.alert("некоректные секунды")
    } else {
        const timerValues = [
                inputHours.value,
                inputMinutes.value,
                inputSeconds.value
            ]
        console.log(timerValues)

        localStorage.setItem("timerValues", `[${timerValues}]`)
        localStorage.setItem("resetValues", `[${timerValues}]`)
        window.location.href = "timer.html"
    }  
} 

function resetInputValue() {
    inputHours.value = ""
    inputMinutes.value = ""
    inputSeconds.value = ""
}


//Button Event

setTimerBtn.addEventListener('click', setTimerValues)
cancelBtn.addEventListener('click', resetInputValue)
