'use strict'

class HtmlElementsHelper {
    
    constructor() {
        throw new Error('Erro ao criar classe HtmlElementsHelper - classe estática');
    }
    
    /**
     * @param id
     * @param title
     * print form for add section on modal
    */
    static formSection(id, title) {
        document.querySelector('.modal-title').innerHTML  = 'Adicionar Seção';
        document.querySelector('.modal-body').innerHTML  = '';

        let div1 = document.createElement('div');
        
        let strong = document.createElement('strong');
        let txtStrong = document.createTextNode('Questionário: ');
        strong.appendChild(txtStrong);

        let span = document.createElement('span');
        let txtSpan = document.createTextNode(title);
        span.appendChild(txtSpan);

        div1.appendChild(strong);
        div1.appendChild(span);

        let div2 = document.createElement('div');

        let label = document.createElement('label');
        label.setAttribute('for', 'title-section');
        let txtLabel = document.createTextNode('Título da Seção');
        label.appendChild(txtLabel);

        let inputText = document.createElement('input');
        inputText.classList.add('form-control');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('id', 'title-section');
        inputText.setAttribute('required', 'required');
        div2.appendChild(inputText);

        let inputHidden = document.createElement('input');
        inputHidden.setAttribute('type', 'hidden');
        inputHidden.setAttribute('id', 'id-quiz');
        inputHidden.setAttribute('value', id);
        div2.appendChild(inputHidden);

        let button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.classList.add('btn-block');
        button.setAttribute('onclick', 'section.addSection(' + id + ')');
        let txtButon = document.createTextNode('Criar Seção');
        button.appendChild(txtButon);
        div2.appendChild(button);

        document.querySelector('.modal-body').insertBefore(div2, null);
        document.querySelector('.modal-body').insertBefore(div1, div2);
    }

    /**
     * @param id
     * @param title
     * print form for add question on modal
    */
    static formQuestion(id, title) {
        document.querySelector('.modal-title').innerHTML  = 'Adicionar Pergunta';
        document.querySelector('.modal-body').innerHTML  = '';

        let div1 = document.createElement('div');
        
        let strong = document.createElement('strong');
        let txtStrong = document.createTextNode('Seção: ');
        strong.appendChild(txtStrong);

        let span = document.createElement('span');
        let txtSpan = document.createTextNode(title);
        span.appendChild(txtSpan);

        div1.appendChild(strong);
        div1.appendChild(span);

        let div2 = document.createElement('div');

        let label = document.createElement('label');
        label.setAttribute('for', 'title-question');
        let txtLabel = document.createTextNode('Enunciado da Pergunta');
        label.appendChild(txtLabel);

        let inputText = document.createElement('input');
        inputText.classList.add('form-control');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('id', 'title-question');
        inputText.setAttribute('required', 'required');
        div2.appendChild(inputText);

        let inputHidden = document.createElement('input');
        inputHidden.setAttribute('type', 'hidden');
        inputHidden.setAttribute('id', 'id-section');
        inputHidden.setAttribute('value', id);
        div2.appendChild(inputHidden);

        let button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.classList.add('btn-block');
        button.setAttribute('onclick', 'question.addQuestion(' + id + ')');
        let txtButon = document.createTextNode('Criar Pergunta');
        button.appendChild(txtButon);
        div2.appendChild(button);

        document.querySelector('.modal-body').insertBefore(div2, null);
        document.querySelector('.modal-body').insertBefore(div1, div2);
    }

    /**
     * @param id
     * @param title
     * print form for edit question on modal (add answer)
    */
    static formEditQuestion(id, title) {
        document.querySelector('.modal-title').innerHTML  = 'Editar Pergunta';
        document.querySelector('.modal-body').innerHTML  = '<strong>Enunciado:</strong> ' + title;
        
        var div = document.createElement('div');

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

    /**
     * @param idQuestion
     * @param answerType
     * when selected the answer type, print specific input
    */
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
        button.classList.add('btn-block');
        button.setAttribute('onclick','answer.addAnswer(' + idQuestion + ',\'' + answerType + '\')');

        let textButton = document.createTextNode('Salvar Tipo de Resposta');
        button.appendChild(textButton);

        document.querySelector('#answers').insertBefore(button, null);
    }

    /**
     * @param idQuestion
     * @param answerType
     * if the answer type is radio or checkbox, generate the options
    */
    static printOptionAnswer(idQuestion) {
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'options' + idQuestion + '[]');
        input.classList.add('form-control');
        document.querySelector('#answers').insertBefore(input, document.getElementById('add-button'));
    }

    /**
     * @param quiz
     * @param nestedData
     * print final quiz with all sections, questions and answers
    */
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

                let input = this.inputType(nestedData[i].questions[y].answers[0].answerType, nestedData[i].questions[y].answers[0].optionsAnswer, nestedData[i].questions[y].id);
                div.appendChild(input);

                fieldset.appendChild(div);
            }

            form.appendChild(fieldset);
        }

        let button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.classList.add('btn-block');

        let txtButon = document.createTextNode('Finalizar Questionário');
        button.appendChild(txtButon);

        form.appendChild(button);

        document.querySelector('.modal-body').insertBefore(form, null);
    }

    /**
     * @param answerType
     * @param optionsAnswer
     * @param questionId
     * select the specific answer type and print
    */
    static inputType(answerType, optionsAnswer, questionId) {
        if(answerType === 'shortText') {
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.classList.add('form-control');
            return input;

        } else if(answerType === 'longText') {
            let textarea = document.createElement('textarea');
            textarea.classList.add('form-control');
            return textarea;

        } else if(answerType === 'date') {
            let input = document.createElement('input');
            input.setAttribute('type', 'date');
            input.classList.add('form-control');
            return input;

        } else if(answerType === 'datetime') {
            let input = document.createElement('input');
            input.setAttribute('type', 'datetime-local');
            input.classList.add('form-control');
            return input;

        } else if(answerType === 'radio') {
            let div = document.createElement('div');

            let options = optionsAnswer.split(',');

            for(let i = 0; i < options.length; i++) {
                let input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'question-' + questionId);
                div.appendChild(input);

                let label  = document.createElement('label');
                label.setAttribute('for', 'question-' + questionId);
                let labelText = document.createTextNode(options[i]);
                label.appendChild(labelText);
                div.appendChild(label);

                let br = document.createElement('br');
                div.appendChild(br);
                
            }

            return div;

        } else if(answerType === 'checkbox') {
            let div = document.createElement('div');

            let options = optionsAnswer.split(',');

            for(let i = 0; i < options.length; i++) {
                let input = document.createElement('input');
                input.setAttribute('type', 'checkbox');
                input.setAttribute('name', 'question-' + questionId);
                div.appendChild(input);

                let label  = document.createElement('label');
                label.setAttribute('for', 'question-' + questionId);
                let labelText = document.createTextNode(options[i]);
                label.appendChild(labelText);
                div.appendChild(label);

                let br = document.createElement('br');
                div.appendChild(br);
                
            }

            return div;

        } else if(answerType === 'number') {
            let input = document.createElement('input');
            input.setAttribute('type', 'number');
            input.classList.add('form-control');
            return input;

        } else if(answerType === 'boolean') {
            let select = document.createElement('select');
            select.classList.add('form-control');

            let optionTrue = document.createElement('option');
            optionTrue.value = '1';
            optionTrue.text = 'Sim';
            select.appendChild(optionTrue);

            let optionFalse = document.createElement('option');
            optionFalse.value = '0';
            optionFalse.text = 'Não';
            select.appendChild(optionFalse);

            return select;

        } else if(answerType === 'rating') {
            let div = document.createElement('div');
            div.classList.add('stars');

            for(let i = 5; i >= 1; i-- ) {

                let input = document.createElement('input');
                input.classList.add('star');
                input.classList.add('star-' + i);
                input.setAttribute('id', 'star-' + i);
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'star');
                div.appendChild(input);

                let label = document.createElement('label');
                label.classList.add('star');
                label.classList.add('star-' + i);
                label.setAttribute('for', 'star-' + i);
                div.appendChild(label);
                
            }


            return div;

        }
    }
    
}