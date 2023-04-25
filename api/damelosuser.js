export default function handler(request, response) {
    fetch(`https://dungee-431f9-default-rtdb.europe-west1.firebasedatabase.app/pins.json`)
    .then(datosstring => datosstring.json())
    .then(eljsondearriba => response.json(eljsondearriba))
    
}
