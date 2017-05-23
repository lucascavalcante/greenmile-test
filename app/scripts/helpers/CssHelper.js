'use strict'

class CssHelper {

    constructor() {
        throw new Error('Erro ao criar classe CssHelper - classe estática');
    }

    static show(element) {
        for(let i = 0; i < element.length; i++) {
            document.querySelector(element[i]).style.display = 'block';
        }
    }

    static hide(element) {
        for(let i = 0; i < element.length; i++) {
            document.querySelector(element[i]).style.display = 'none';
        }
    }

}