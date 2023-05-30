export default function handler(request, response) {
    let pin = request.query.pin;

    fetch(`https://dungee-431f9-default-rtdb.europe-west1.firebasedatabase.app/pins/pin${pin}.json`)
        .then(datosstring => datosstring.json())
        .then(eljsondearriba => response.json(eljsondearriba))
    
}
