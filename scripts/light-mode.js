let darkMode = document.querySelector(".darkMode")
let modeDark = true

darkMode.addEventListener("click", darkModeFunction)


export function darkModeFunction(event) {

    document.querySelector("html").classList.toggle("light-mode")

    let mode = modeDark ? "light" : "dark"

    event.currentTarget.querySelector("span").textContent = `${mode} mode ativado!`

    modeDark = !modeDark


}