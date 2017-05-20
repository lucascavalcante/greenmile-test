'use strict';

class Quiz {

    constructor(id, title) {
        this._id = id;
        this._title = title.toUpperCase();
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    set title(itle) {
        this._title = title;
    }

}