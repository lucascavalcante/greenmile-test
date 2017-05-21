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
			    <button class="btn btn-primary form-control" onclick="section.addSection(' + id + ')">Criar Seção</button>\
            </div>\
        ';
        document.querySelector('.modal-body').innerHTML  = html;
    }

    static formQuestion(id, title) {
        document.querySelector('.modal-title').innerHTML  = 'Adicionar Pergunta';
        let html = '\
            <div>\
                <strong>Seção:</strong> '+ title +'\
            </div>\
            <div class="form-group">\
                <label for="title-question">Enunciado da Pergunta</label>\
			    <input type="text" class="form-control" id="title-question" required>\
                <input type="hidden" id="id-section" value="' + id + '">\
			    <button class="btn btn-primary form-control" onclick="question.addQuestion(' + id + ')">Criar Pergunta</button>\
            </div>\
        ';
        document.querySelector('.modal-body').innerHTML  = html;
    }

    static formEditQuestion(id, title) {
        document.querySelector('.modal-title').innerHTML  = 'Editar Pergunta';
        document.querySelector('.modal-body').innerHTML  = '<strong>Enunciado:</strong> ' + title;
        
        var div = document.createElement('div');
        div.classList.add('form-group');

        var select = document.createElement('select');
        select.classList.add('form-control');
        select.setAttribute('onchange','question.addAnswerType()');

        var defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = 'Selecione o tipo de resposta para esta pergunta';
        select.appendChild(defaultOption);
        
        var options = {
            'short-text': 'Texto Curto',
            'long-text': 'Texto Longo'
        };

        for(let key in options) {
            let option = document.createElement('option');
            option.value = key;
            option.text = options[key];
            select.appendChild(option);
        }

        div.appendChild(select);
        
        document.querySelector('.modal-body').insertBefore(div, null);
    }
    
}