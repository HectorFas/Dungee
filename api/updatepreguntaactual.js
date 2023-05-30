export default function handler(request, response) {
    let pin = request.query.pin;
    let i = request.query.i;

    fetch(`https://dungee-431f9-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/pregunta.json`, {
        method: 'PUT',
        body: `{"valor": ${i}}`
    });
}