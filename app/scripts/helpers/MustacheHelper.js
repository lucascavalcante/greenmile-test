'use strict'

class MustacheHelper {
    
    constructor() {
        throw new Error('Erro ao criar classe MustacheHelper - classe estática');
    }

    /**
     * @param data
     * @param config
     * generic function for print dynamic data on view
    */
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
    
    /**
     * @param data
     * print quiz dynamic data on view
    */
    static printQuiz(data) {
        let items = { quiz: data.list };
        let output = Mustache.render(document.getElementById('item-quiz').firstChild.nodeValue, items);
        document.getElementById('quizzes').innerHTML = output;
    }

    /**
     * @param data
     * @param config
     * print section dynamic data on view
    */
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

    /**
     * @param data
     * @param config
     * print question dynamic data on view
    */
    static printQuestion(data, config) {

        let listBySection = [];
        
        for(var i = 0; i < (data._list).length; i++) {
            if(data._list[i].sectionId === config.sectionId)
                listBySection.push(data._list[i]);
        }

        let items = { question: listBySection };
        let output = Mustache.render(document.getElementById('item-question').firstChild.nodeValue, items);
        document.getElementById('questions-' + config.sectionId).innerHTML = output;
    }
    
}