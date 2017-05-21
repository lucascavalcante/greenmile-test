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
        this._titleQuestion = document.querySelector('#title-question');
        this._sectionId = sectionId;
        this._questionList.add(this._newQuestion());
        this._clearForm();
        $('#modal').modal('hide');
    }

    delQuestion(id, sectionId) {
        this._sectionId = sectionId;
        if(confirm('Tem certeza que deseja apagar essa pergunta?')) {
            this._questionList.del(id);
        }
    }

    getFocus() {
        //this._titleQuestion.focus();
    }

    openModalEditQuestion(id) {
        let questionSelected = this._questionList.searchById(id);
        HtmlElementsHelper.formEditQuestion(id, questionSelected.title);
        $('#modal').modal();
    }

    _newQuestion() {
        this._idQuestion = ((this._questionList.list).length) + 1;
        return new Question(this._idQuestion, this._sectionId, this._titleQuestion.value);
    }

    _clearForm() {
        this._titleQuestion.value = '';
    }

}