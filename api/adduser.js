export default function handler(request, response) {
    let pin = request.query.pin;
    let nom = request.query.nom;

    return fetch(`https://dungee-431f9-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}/users.json`, {
        method: 'POST',
        body: `{"name": "${nom}"}`
    })
    .then(data => data.json())
    .then(json => response.json(json))
}