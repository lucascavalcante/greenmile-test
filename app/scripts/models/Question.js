'use strict';

class Question {

    constructor(id, sectionId, title) {
        this._id = id;
        this._sectionId = sectionId;
        this._title = title;
    }

    get id() {
        return this._id;
    }

    get sectionId() {
        return this._sectionId;
    }

    get title() {
        return this._title;
    }

    set title(itle) {
        this._title = title;
    }

}