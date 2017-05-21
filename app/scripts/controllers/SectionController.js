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

    addSection(quizId) {
        this._titleSection = document.querySelector('#title-section');
        this._quizId = quizId;
        this._sectionList.add(this._newSection());
        this._clearForm();
        $('#modal').modal('hide');
    }

    delSection(id,quizId) {
        this._quizId = quizId;
        if(confirm('Tem certeza que deseja apagar essa seção?')) {
            this._sectionList.del(id);
        }
    }

    getFocus() {
        this._titleSection.focus();
    }

    openModalQuestion(id) {
        let sectionSelected = this._sectionList.searchById(id);
        HtmlElementsHelper.formQuestion(id, sectionSelected.title);
        $('#modal').modal();
    }

    getFilteredList(quizId) {
        return this._sectionList.searchByQuizId(quizId);
    }

    _newSection() {
        this._idSection = ((this._sectionList.list).length) + 1;
        return new Section(this._idSection, this._quizId, this._titleSection.value);
    }

    _clearForm() {
        this._titleSection.value = '';
    }

}