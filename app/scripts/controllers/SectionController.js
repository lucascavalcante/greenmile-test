'use strict'

class SectionController {

    constructor(quizId) {
        this._sectionList = new List();
        this._idSection = 0;
        this._quizId = quizId;
        this._titleSection = document.querySelector('');
    }

    addSection() {
        this._sectionList.add(this._newSection());
        MustacheHelper.printSection(this._sectionList);
        this._clearForm();
    }

    delSection(id) {
        if(confirm('Tem certeza que deseja apagar essa seção?')) {
            this._sectionList.del(id);
            MustacheHelper.printSection(this._sectionList);
        }
    }

    getFocus() {
        //this._titleSection.focus();
    }

    _newSection() {
        this._idSection = ((this._sectionList.list).length) + 1
        return new Quiz(this._idSection, this._quizId, this._titleSection.value);
    }

    _clearForm() {
        this._titleSection.value = '';
    }

}