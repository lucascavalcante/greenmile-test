'use strict';

class Section {

    constructor(id, quizId, title) {
        this._id = id;
        this._quizId = quizId;
        this.title = title;
    }

    get id() {
        return this._id;
    }

    get quizId() {
        return this._quizId;
    }

    get title() {
        return this._title;
    }

    set title(itle) {
        this._title = title;
    }

}
