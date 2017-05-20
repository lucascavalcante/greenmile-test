'use strict'

class List {
    
    constructor() {
        this._list = [];
    }
    
    add(list) {
        this._list.push(list);
    }

    del(id) {
        for(var i = 0; i < (this._list).length; i++) {
            if(this._list[i].id === id)
                this._list.splice(i, 1);
        }
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