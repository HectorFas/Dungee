const dburl = "https://dungee-431f9-default-rtdb.europe-west1.firebasedatabase.app";

export function fetchUsuarios(pin) {
    return fetch(`/api/fetchusuarios?pin=${pin}`)
            .then(datos => datos.json())
}

export function fetchPreguntas() {
    return fetch(`/api/fetchpreguntas`)
        .then(datos => datos.json())
}

export function upDatePreguntaActual(i, pin) {
    fetch(`/api/updatepreguntaactual?i=${i}&pin=${pin}`)
}

export function addUser(pin,nom){
    return fetch(`/api/adduser?nom=${nom}&pin=${pin}`)
    .then(data => data.json())
}

export function getPreguntaActual(pin){
    return fetch(`/api/getpreguntaactual?pin=${pin}`)
    .then(data => data.json())
}


export function actualizarRespuesta(pin, userid, preguntaActual, respuesta){
    fetch(`/api/actualizarrespuesta?pin=${pin}&userid=${userid}&preguntaActual=${preguntaActual}&respuesta=${respuesta}`)
}

export function mostrarRespuesta(pin, userid, preguntaActual) {
    return fetch(`${dburl}/pins/pin${pin}//users/${userid}/respuestas/pregunta${preguntaActual}.json`)
    .then(data => data.json())
}
