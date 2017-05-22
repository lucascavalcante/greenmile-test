'use strict'

class QuizController {

    constructor() {
        this._quizList = new List(model => {
            MustacheHelper.print(model, { item: 'quiz' });
        });
        
        this._idQuiz = 0;
        this._titleQuiz = document.querySelector('#title-quiz');
    }

    /**
     * add new quiz
    */
    addQuiz() {
        this._quizList.add(this._newQuiz());
        this._clearForm();
        this.getFocus();
    }

    /**
     * @param id
     * delete specific quiz
    */
    delQuiz(id) {
        if(confirm('Tem certeza que deseja apagar esse questionário?')) {
            this._quizList.del(id);
        }
    }

    /**
     * focusing the input to add quiz, everytime
    */
    getFocus() {
        this._titleQuiz.focus();
    }

    /**
     * @param id
     * open modal for add sections
    */
    openModalSection(id) {
        let quizSelected = this._quizList.searchById(id);
        HtmlElementsHelper.formSection(id, quizSelected.title);
        $('#modal').modal();
    }

    /**
     * @param quizId
     * @param section
     * @param question
     * @param answer
     * generate quiz with all data nested information
    */
    viewQuiz(quizId, section, question, answer) {
        let quiz = this._quizList.searchById(quizId);
        let sections = section.getFilteredList(quizId);
        for(let i = 0; i < sections.length; i++) {
            let questions = question.getFilteredList(sections[i].id);
            for(let y = 0; y < questions.length; y++) {
                let answers = answer.getFilteredList(questions[y].id);
                questions[y]['answers'] = answers;
            }
            sections[i]['questions'] = questions;
        }
        HtmlElementsHelper.viewQuiz(quiz, sections);
        $('#modal').modal();
    }

    /**
     * create new quiz object
    */
    _newQuiz() {
        this._idQuiz = ((this._quizList.list).length) + 1
        return new Quiz(this._idQuiz, this._titleQuiz.value);
    }

    /**
     * when submit quiz form, clear input
    */
    _clearForm() {
        this._titleQuiz.value = '';
    }

}