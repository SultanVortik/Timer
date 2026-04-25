const buttonOne = document.querySelector(".btn-1")
const buttonTwo = document.querySelector(".btn-2")
const workArrayOne = [29, 59]
const workArrayTwo = [59, 59]
const breakArrayOne = [4, 59]
const breakArrayTwo = [9, 59]

buttonOne.addEventListener("click", () => {
    localStorage.setItem("pomodoroValuesWork", `[${workArrayOne}]`)
    localStorage.setItem("pomodoroValuesBreak", `[${breakArrayOne}]`)
    localStorage.setItem("resetPomodoroValuesWork", `[${workArrayOne}]`)
    localStorage.setItem("resetPomodoroValuesBreak", `[${breakArrayOne}]`)
    location.href = "pomodoro.html"
})

buttonTwo.addEventListener("click", () => {
    localStorage.setItem("pomodoroValuesWork", `[${workArrayTwo}]`)
    localStorage.setItem("pomodoroValuesBreak", `[${breakArrayTwo}]`)
    localStorage.setItem("resetPomodoroValuesWork", `[${workArrayTwo}]`)
    localStorage.setItem("resetPomodoroValuesBreak", `[${breakArrayTwo}]`)
    location.href = "pomodoro.html"
})
