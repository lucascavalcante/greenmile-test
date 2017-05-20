'use strict'

class HtmlElementsHelper {
    
    constructor() {
        throw new Error('Erro ao criar classe HtmlElementsHelper - classe estática');
    }
    
    static formSection(id, title) {
        document.querySelector('.modal-title').innerHTML  = 'Adicionar Seção';
        let html = '\
            <div>\
                <strong>Questionário:</strong> '+ title +'\
            </div>\
            <div class="form-group">\
                <label for="title-section">Título da Seção</label>\
			    <input type="text" class="form-control" id="title-section" required>\
                <input type="hidden" id="id-quiz" value="' + id + '">\
			    <button class="btn btn-primary form-control" onclick="">Criar Seção</button>\
            </div>\
        ';
        document.querySelector('.modal-body').innerHTML  = html;
    }
    
}