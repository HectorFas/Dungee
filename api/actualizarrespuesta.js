export default function handler(request, response) {
    let pin = request.query.pin;
    let userid = request.query.userid;
    let preguntaActual = request.query.preguntaActual;
    let respuesta = request.query.respuesta;

    fetch(`https://dungee-431f9-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/users/${userid}/respuestas/pregunta${preguntaActual}.json`, {
        method: 'PUT',
        body: `{"letra" : "${respuesta}"}`
    })
}