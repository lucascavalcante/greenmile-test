'use strict';

class Answer {

    constructor(id, questionId, answerType, optionsAnswer) {
        this._id = id;
        this._questionId = questionId;
        this._answerType = answerType;
        this._optionsAnswer = optionsAnswer;
    }

    get id() {
        return this._id;
    }

    get questionId() {
        return this._questionId;
    }

    get answerType() {
        return this._answerType;
    }

    set answerType(answerType) {
        this._answerType = answerType;
    }

    get optionsAnswer() {
        return this._optionsAnswer;
    }

    set optionsAnswer(optionsAnswer) {
        this._optionsAnswer = optionsAnswer;
    }

}