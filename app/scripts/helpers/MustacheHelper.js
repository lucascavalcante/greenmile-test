'use strict'

class MustacheHelper {
    
    constructor() {
        throw new Error('Erro ao criar classe MustacheHelper - classe estática');
    }
    
    static printQuiz(data) {
        let items = { quiz: data._list };
        let output = Mustache.render(document.getElementById('item-quiz').firstChild.nodeValue, items);
        document.getElementById('quizzes').innerHTML = output;
    }
    
}