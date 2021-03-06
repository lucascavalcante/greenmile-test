'use strict'

class QuestionController {

    constructor() {

        var parent = this;

        this._questionList = new ListQuestion(model => {
            MustacheHelper.print(model, { item: 'question', sectionId: parent._sectionId });
        });
        this._idQuestion = 0;
        this._sectionId = 0;
        this._titleQuestion = null;
    }

    /**
     * @param sectionId
     * add new question
    */
    addQuestion(sectionId) {
        this._titleQuestion = document.querySelector('#title-question');
        this._sectionId = sectionId;
        this._questionList.add(this._newQuestion());
        CssHelper.hide(['.modal','.dark-bg']);
    }

    /**
     * @param id
     * @param sectionId
     * delete specific question
    */
    delQuestion(id, sectionId) {
        this._sectionId = sectionId;
        if(confirm('Tem certeza que deseja apagar essa pergunta?')) {
            this._questionList.del(id);
        }
    }

    /**
     * @param id
     * open modal for edit question (add answers)
    */
    openModalEditQuestion(id) {
        let questionSelected = this._questionList.searchById(id);
        HtmlElementsHelper.formEditQuestion(id, questionSelected.title);
        CssHelper.show(['.modal','.dark-bg']);
    }

    /**
     * @param sectionId
     * just get questions with parent sections where has the sectionId
    */
    getFilteredList(sectionId) {
        return this._questionList.searchBySectionId(sectionId);
    }

    /**
     * create new question object
    */
    _newQuestion() {
        this._idQuestion = ((this._questionList.list).length) + 1;
        return new Question(this._idQuestion, this._sectionId, this._titleQuestion.value);
    }

}