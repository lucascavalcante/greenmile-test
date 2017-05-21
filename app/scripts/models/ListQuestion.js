'use strict'

class ListQuestion extends List {
    
    constructor(updateView) {
        super(updateView);
    }
    
    searchBySectionId(sectionId) {
        let listBySection = [];
        for(var i = 0; i < (this._list).length; i++) {
            if(this._list[i].sectionId === sectionId)
                listBySection.push(this._list[i]);
        }
        return listBySection;
    }
    
}