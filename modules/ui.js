export function mostrar(elementId, className) {
    document.querySelectorAll(`.${className}`).forEach(el => el.classList.add("oculto"))
    document.getElementById(elementId).classList.remove("oculto")
}

export function ocultar(elementId, className) {
    document.querySelectorAll(`.${className}`).forEach(el => el.classList.add("oculto"))
    document.getElementById(elementId).classList.add("oculto")
}

