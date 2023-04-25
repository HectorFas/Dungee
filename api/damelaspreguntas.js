export default function hadler(request, response) {
    const questions = {
        "preguntas" :[
         {pregunta : ["¿Cuanto es dos más dos?", "2",false,"3",false,"4",true ]},
         {pregunta : ["¿Cuanto es dos más tres?", "2",false,"5",true,"4",false ]},  
         {pregunta : ["¿Cuanto es cinco más cinco?", "10",true,"3",false,"4",false ]}, 
        ] 

    }

    response.json(questions);
}
