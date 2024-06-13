import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.querySelector("html").classList.toggle("running")

    sounds.buttonPressAudio.play()
    timer.countDown()
}

export function set() {
    el.minutes.setAttribute("contenteditable", true)
    el.minutes.focus()
}

export function reset() {
    state.isRunning = false
    document.querySelector("html").classList.toggle("running")
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function toggleMusic() {
    state.isMute = document.querySelector("html").classList.toggle("music-on")
    if (state.isMute) {
        sounds.bgAudio.play()
        return
    }
    sounds.bgAudio.pause()

}