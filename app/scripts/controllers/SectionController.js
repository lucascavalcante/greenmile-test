'use strict'

class SectionController {

    constructor() {

        var parent = this;

        this._sectionList = new ListSection(model => {
            MustacheHelper.print(model, { item: 'section', quizId: parent._quizId });
        });
        this._idSection = 0;
        this._quizId = 0;
        this._titleSection = null;
    }

    /**
     * @param quizId
     * add new section
    */
    addSection(quizId) {
        this._titleSection = document.querySelector('#title-section');
        this._quizId = quizId;
        this._sectionList.add(this._newSection());
        CssHelper.hide(['.modal','.dark-bg']);
    }

    /**
     * @param id
     * @param quizId
     * delete specific section
    */
    delSection(id,quizId) {
        this._quizId = quizId;
        if(confirm('Tem certeza que deseja apagar essa seção?')) {
            this._sectionList.del(id);
        }
    }

    /**
     * @param id
     * open modal for add questions
    */
    openModalQuestion(id) {
        let sectionSelected = this._sectionList.searchById(id);
        HtmlElementsHelper.formQuestion(id, sectionSelected.title);
        CssHelper.show(['.modal','.dark-bg']);
    }

    /**
     * @param quizId
     * just get sections with parent quizzes where has the quizId
    */
    getFilteredList(quizId) {
        return this._sectionList.searchByQuizId(quizId);
    }

    /**
     * create new section object
    */
    _newSection() {
        this._idSection = ((this._sectionList.list).length) + 1;
        return new Section(this._idSection, this._quizId, this._titleSection.value);
    }

}