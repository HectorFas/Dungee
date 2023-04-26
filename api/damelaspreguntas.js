export default function hadler(request, response) {
    const questions = {
        "preguntas" :[
         ["¿Cuanto es dos más dos?", "2",false,"3",false,"4",true ],   //Indicar respuesta correcta mdiante posicion del array.
         ["¿Cuanto es dos más tres?", "2",false,"5",true,"4",false ],  
         ["¿Cuanto es cinco más cinco?", "10",true,"3",false,"4",false ]
        ] ,


        "preguntas" : {
            "Pregunta" : "2+1?",
            "Res1" : "2",
            "Res2" : "3",
            "Res3" : "5",
            "Corr" : "3"
        },
        "pregunta2" : {
            "pregunta" : "2+2",
            "Res1" : "4",
            "Res2" : "3",
            "Res3" : "5",
            "Corr" : "4"

        },
        "pregunta3" : {
            "pregunta" : "10+9",
            "Res1" : "9",
            "Res2" : "30",
            "Res3" : "19",
            "Corr" : "19"

        }

    }

    response.json(questions);
}
