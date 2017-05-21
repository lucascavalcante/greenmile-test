'use strict'

class ListAnswer extends List {
    
    constructor(updateView) {
        super(updateView);
    }

    add(list) {
        this._list.push(list);
    }

    del(id) {
        for(var i = 0; i < (this._list).length; i++) {
            if(this._list[i].id === id)
                this._list.splice(i, 1);
        }
    }
    
    searchByQuestionId(questionId) {
        let listByQuestion = [];
        for(var i = 0; i < (this._list).length; i++) {
            if(this._list[i].questionId === questionId)
                listByQuestion.push(this._list[i]);
        }
        return listByQuestion;
    }
    
}