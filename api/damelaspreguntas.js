export default function hadler(request, response) {
    const questions = {
        "preguntas" : {
            "pregunta1" : {
                "pregunta" : "2+1?",
                "Res1" : "2",
                "Res2" : "3",
                "Res3" : "5",
                "Corr" : "3"
            },
            "pregunta2" : {
                "pregunta" : "2+2?",
                "Res1" : "4",
                "Res2" : "3",
                "Res3" : "5",
                "Corr" : "a"
    
            },
            "pregunta3" : {
                "pregunta" : "10+9?",
                "Res1" : "9",
                "Res2" : "30",
                "Res3" : "19",
                "Corr" : "19"
    
            },
            "pregunta4" : {
                "pregunta" : "10+1?",
                "Res1" : "11",
                "Res2" : "30",
                "Res3" : "19",
                "Corr" : "11"
    
            },
            "pregunta5" : {
                "pregunta" : "Capital de España",
                "Res1" : "Madrid",
                "Res2" : "BArcelona",
                "Res3" : "Valencia",
                "Corr" : "Madrid"
    
            }
        }
    }

    response.json(questions);
}
