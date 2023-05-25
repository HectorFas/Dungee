const dburl = "https://dungee-431f9-default-rtdb.europe-west1.firebasedatabase.app";

export function fetchUsuarios(pin) {
    return fetch(`/api/damelosuser?pin=${pin}`)
            .then(datos => datos.json())
}

export function fetchPreguntas() {
    return fetch(`/api/damelaspreguntas`)
        .then(datos => datos.json())
}

export function upDatePreguntaActual(i, pin) {
    fetch(`${dburl}/pins/pin${pin}/pregunta.json`, {
        method: 'PUT',
        body: `{"valor": ${i}}`
    });
}

export function addUser(pin,nom){
    return fetch(`https://dungee-431f9-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/users.json`, {
            method: 'POST',
            body: `{"name": "${nom}"}`
        })
        .then(data => data.json())
}

export function getPreguntaActual(pin){
    return fetch(`${dburl}/pins/pin${pin}/pregunta.json`)
            .then(data => data.json())  //Cogemos el json preguntas del fetch(descargar) y de ahi como esos datos nos los da como String en JSON.
}


export function actualizarRespuesta(pin, userid, preguntaActual, respuesta){
    fetch(`${dburl}/pins/pin${pin}/users/${userid}/respuestas/pregunta${preguntaActual}.json`, {
            method: 'PUT',
            body: `{"letra" : "${respuesta}"}`
    })
}

export function mostrarRespuesta(pin, userid, preguntaActual) {
    return fetch(`${dburl}/pins/pin${pin}//users/${userid}/respuestas/pregunta${preguntaActual}.json`)
    .then(data => data.json())
}
