const pomodoroTitle = document.querySelector('.main_title')
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

function themeUse() {
    const localStorageSettings = JSON.parse(localStorage.getItem('settingsObj'))
    if (localStorageSettings.theme === 'light') {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#FFF8DC'
        body.style.setProperty('--text-color-light', 'black')
        pomodoroTitle.style.color = 'black' 
        console.log(localStorageSettings.theme)
    } else {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#172c4b'
        body.style.setProperty('--text-color-light', 'white')
        console.log(localStorageSettings.theme)
    }
}

themeUse()