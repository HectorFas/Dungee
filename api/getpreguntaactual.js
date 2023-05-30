export default function handler(request, response) {
    let pin = request.query.pin;

    fetch(`https://dungee-431f9-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/pregunta.json`)
    .then(data => data.json())
    .then(json =>  response.json(json))

}