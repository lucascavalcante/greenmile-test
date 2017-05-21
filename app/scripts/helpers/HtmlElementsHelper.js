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
        select.setAttribute('onchange','answer.addAnswerType(' + id + ', this.value)');

        var defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = 'Selecione o tipo de resposta para esta pergunta';
        select.appendChild(defaultOption);
        
        var options = {
            'shortText': 'Texto Curto',
            'longText': 'Texto Longo',
            'date': 'Data',
            'datetime': 'Data e Hora',
            'radio': 'Seleção Única',
            'checkbox': 'Seleção Múltipla',
            'number': 'Numérico',
            'boolean': 'Sim / Não',
            'rating': 'Classificação',
        };

        for(let key in options) {
            let option = document.createElement('option');
            option.value = key;
            option.text = options[key];
            select.appendChild(option);
        }

        div.appendChild(select);
        
        document.querySelector('.modal-body').insertBefore(div, null);

        var divAnswers = document.createElement('div');
        divAnswers.id = 'answers';
        document.querySelector('.modal-body').insertBefore(divAnswers, null);
    }

    static printAnswer(idQuestion, answerType) {
        document.querySelector('#answers').innerHTML = '';

        if(answerType === 'radio' || answerType === 'checkbox') {
            let addButton = document.createElement('button');
            addButton.classList.add('btn');
            addButton.classList.add('btn-success');
            addButton.setAttribute('id', 'add-button');
            addButton.setAttribute('onclick','answer.addOptionAnswer(' + idQuestion + ')');

            let textAddButton = document.createTextNode('+ Adicionar Opção');
            addButton.appendChild(textAddButton);

            document.querySelector('#answers').insertBefore(addButton, null);
        }

        let button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.classList.add('form-control');
        button.setAttribute('onclick','answer.addAnswer(' + idQuestion + ',\'' + answerType + '\')');

        let textButton = document.createTextNode('Salvar Tipo de Resposta');
        button.appendChild(textButton);

        document.querySelector('#answers').insertBefore(button, null);
    }

    static printOptionAnswer(idQuestion) {
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'options' + idQuestion + '[]');
        input.classList.add('form-control');
        document.querySelector('#answers').insertBefore(input, document.getElementById('add-button'));
    }

    static viewQuiz(quiz, nestedData) {
        document.querySelector('.modal-title').innerHTML  = 'Visualizar Questionário - ' + quiz.title;
        document.querySelector('.modal-body').innerHTML  = '';

        var form = document.createElement('form');

        for(let i = 0; i < nestedData.length; i++) {
            var fieldset = document.createElement('fieldset');
            let legend = document.createElement('legend');
            let titleLegend = document.createTextNode(nestedData[i].title);
            legend.appendChild(titleLegend);
            fieldset.appendChild(legend);

            for(let y = 0; y < nestedData[i].questions.length; y++){
                let div = document.createElement('div');
                let txt = document.createTextNode(nestedData[i].questions[y].title);
                div.appendChild(txt);

                let input = this.inputType(nestedData[i].questions[y].answers[0].answerType);
                div.appendChild(input);

                fieldset.appendChild(div);
            }

            form.appendChild(fieldset);
        }

        document.querySelector('.modal-body').insertBefore(form, null);
    }

    static inputType(answerType) {
        var input = null;
        if(answerType === 'shortText') {
            input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.classList.add('form-control');
        }
        return input;
    }
    
}