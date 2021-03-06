'use strict'

class AnswerController {

    constructor() {

        this._answerList = new ListAnswer();
        this._idAnswer = 0;
        this._questionId = 0;
        this._answerType = null;
        this._optionsAnswer = null;
    }

    /**
     * @param idQuestion
     * @param answerType
     * add new answer
    */
    addAnswer(idQuestion, answerType) {
        this._questionId = idQuestion;
        this._answerType = answerType;
        let options = document.getElementsByName('options' + idQuestion + '[]');

        let optionsArray = [];
        for(let i = 0; i < options.length; i++) {
            optionsArray.push(options[i].value);
        }
        this._optionsAnswer = optionsArray.join();

        this._answerList.add(this._newAnswer());
        CssHelper.hide(['.modal','.dark-bg']);
        document.getElementById('add-type-answer' + idQuestion).remove();
    }

    /**
     * @param idQuestion
     * @param answerType
     * generate html elements for add answer type
    */
    addAnswerType(idQuestion, answerType) {
        HtmlElementsHelper.printAnswer(idQuestion, answerType);
    }

    /**
     * @param idQuestion
     * generate html elements for radio and checkbox items
    */
    addOptionAnswer(idQuestion) {
        HtmlElementsHelper.printOptionAnswer(idQuestion);
    }

    /**
     * @param questionId
     * just get answers with parent question where has the questionId
    */
    getFilteredList(questionId) {
        return this._answerList.searchByQuestionId(questionId);
    }

    /**
     * create new answer object
    */
    _newAnswer() {
        this._idAnswer = ((this._answerList.list).length) + 1;
        return new Answer(this._idAnswer, this._questionId, this._answerType, this._optionsAnswer);
    }

}