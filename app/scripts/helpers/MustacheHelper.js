'use strict'

class MustacheHelper {
    
    constructor() {
        throw new Error('Erro ao criar classe MustacheHelper - classe estática');
    }

    static print(data, config) {
        switch(config.item) {
            case 'quiz':
                this.printQuiz(data);
            break;
            case 'section':
                this.printSection(data, config);
            break;
            case 'question':
                this.printQuestion(data, config);
            break;
        }
    }
    
    static printQuiz(data) {
        let items = { quiz: data.list };
        let output = Mustache.render(document.getElementById('item-quiz').firstChild.nodeValue, items);
        document.getElementById('quizzes').innerHTML = output;
    }

    static printSection(data, config) {

        let listByQuiz = [];
        
        for(var i = 0; i < (data._list).length; i++) {
            if(data._list[i].quizId === config.quizId)
                listByQuiz.push(data._list[i]);
        }

        let items = { section: listByQuiz };
        let output = Mustache.render(document.getElementById('item-section').firstChild.nodeValue, items);
        document.getElementById('sections-' + config.quizId).innerHTML = output;
    }

    static printQuestion(data, config) {
        console.log(data);
        console.log(config);
    }
    
}