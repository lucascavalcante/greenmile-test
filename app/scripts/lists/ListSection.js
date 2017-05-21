'use strict'

class ListSection extends List {
    
    constructor(updateView) {
        super(updateView);
    }
    
    searchByQuizId(quizId) {
        let listByQuiz = [];
        for(var i = 0; i < (this._list).length; i++) {
            if(this._list[i].quizId === quizId)
                listByQuiz.push(this._list[i]);
        }
        return listByQuiz;
    }
    
}