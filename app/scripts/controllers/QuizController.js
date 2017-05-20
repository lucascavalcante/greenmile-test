'use strict'

class QuizController {

    constructor() {
        this._quizList = new List();
        this._idQuiz = 0;
        this._titleQuiz = document.querySelector('#title-quiz');
    }

    addQuiz() {
        this._quizList.add(this._newQuiz());
        MustacheHelper.printQuiz(this._quizList);
        this._clearForm();
        this.getFocus();
    }

    delQuiz(id) {
        if(confirm('Tem certeza que deseja apagar esse questionário?')) {
            this._quizList.del(id);
            MustacheHelper.printQuiz(this._quizList);
        }
    }

    getFocus() {
        this._titleQuiz.focus();
    }

    openModal(id) {
        let quizSelected = this._quizList.searchById(id);
        HtmlElementsHelper.formSection(id, quizSelected.title);
        $('#modal').modal();
    }

    _newQuiz() {
        this._idQuiz = ((this._quizList.list).length) + 1
        return new Quiz(this._idQuiz, this._titleQuiz.value);
    }

    _clearForm() {
        this._titleQuiz.value = '';
    }

}