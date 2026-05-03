const selectMusic = document.querySelector('.select')
const themeBtn = document.querySelector('#theme-container')
const lightBtn = document.querySelector('#light')
const darkBtn = document.querySelector('#dark')
const musicOption = document.querySelectorAll('option')

const settingsObj = {
    theme: "dark",
    music: "../src/music/4.mp3"
}


themeBtn.addEventListener('click', (event) => {
    if (event.target.type ===  'radio') {
        settingsObj.theme = event.target.id
        console.log(settingsObj.theme)
        localStorage.setItem('settingsObj', JSON.stringify(settingsObj))
        themeUse()
    }
})

selectMusic.addEventListener('change', (event) => {
    settingsObj.music = event.target.value
    console.log(settingsObj.music)
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj))

})

function getThemeSettings() {
    const localStorageSettings = JSON.parse(localStorage.getItem('settingsObj'))
    if (localStorageSettings.theme === 'light') {
        lightBtn.setAttribute('checked', 'checked')
        themeUse()
    } else if ((localStorageSettings.theme === 'dark')) {
        darkBtn.setAttribute('checked', 'checked')
        themeUse()
    } 
}

function getMusicSetting() {
    const localStorageSettings = JSON.parse(localStorage.getItem('settingsObj'))
    musicOption.forEach((item) => {
        if (item.value === localStorageSettings.music) {
            item.setAttribute('selected', 'selected')
        }
    })
}

function themeUse() {
    const localStorageSettings = JSON.parse(localStorage.getItem('settingsObj'))
    if (localStorageSettings.theme === 'light') {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#FFF8DC'
        body.style.setProperty('--text-color-light', 'black')
        musicOption.forEach((item) => {
            item.style.backgroundColor = '#FFF8DC'
        })
    } else {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#172c4b'
        body.style.setProperty('--text-color-light', 'white')
        musicOption.forEach((item) => {
            item.style.backgroundColor = '#172c4b'
        })
    }
}

themeUse()
getMusicSetting()
getThemeSettings()


