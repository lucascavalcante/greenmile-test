'use strict'

class List {
    
    constructor(updateView) {
        this._list = [];
        this._updateView = updateView;
    }
    
    add(list) {
        this._list.push(list);
        this._updateView(this);
    }

    del(id) {
        for(var i = 0; i < (this._list).length; i++) {
            if(this._list[i].id === id)
                this._list.splice(i, 1);
        }
        this._updateView(this);
    }

    searchById(id) {
        for(var i = 0; i < (this._list).length; i++) {
            if(this._list[i].id === id)
                return this._list[i];
        }
    }
    
    get list() {
        return [].concat(this._list);
    }
}