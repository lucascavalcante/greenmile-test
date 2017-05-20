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

    addQuestion(sectionId) {
        this._titleQuestion = document.querySelector('#title-Question');
        this._sectionId = sectionId;
        this._QuestionList.add(this._newQuestion());
        this._clearForm();
        $('#modal').modal('hide');
    }

    delQuestion(id) {
        if(confirm('Tem certeza que deseja apagar essa seção?')) {
            this._QuestionList.del(id);
            MustacheHelper.printQuestion(this._QuestionList);
        }
    }

    getFocus() {
        //this._titleQuestion.focus();
    }

    _newQuestion() {
        this._idQuestion = ((this._QuestionList.list).length) + 1;
        return new Question(this._idQuestion, this._sectionId, this._titleQuestion.value);
    }

    _clearForm() {
        this._titleQuestion.value = '';
    }

}