export default function hadler(request, response) {
    const questions = {
        "Pregunta" : " Cuanto es dos más dos"
    };

    response.json(questions);
}