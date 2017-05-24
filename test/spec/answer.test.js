(function () {
  'use strict';

  var answer1 = new Answer(1, 3, 'number', null);
  var answer2 = new Answer(2, 1, 'shortText', null);
  var answer3 = new Answer(3, 2, 'radio', '1936,1918,1960,1945');

  describe('Testando a resposta', function () {
    
    describe('Model', function () {

      it('Deve retornar um objeto Answer', function () {
        expect(answer3.id).to.equal(3);
        expect(answer3.questionId).to.equal(2);
        expect(answer3.answerType).to.equal('radio');
        expect(answer3.optionsAnswer).to.equal('1936,1918,1960,1945');
      });

    });

    describe('List', function () {

      let list = new ListAnswer(obj => console.log(obj));
      list.add(answer1);
      list.add(answer2);
      list.add(answer3);

      it('Deve retornar a lista de respostas com 3 respostas', function () {
        expect(list.list).to.have.lengthOf(3);
      });

      it('Deve retornar apenas a resposta com o id = 2', function () {
        let itemId = list.searchById(2)
        expect(itemId.answerType).to.equal('shortText');
      });

      it('Deve retornar apenas a resposta que faz parte da questão com id = 2', function () {
        let item = list.searchByQuestionId(2)
        expect(item).to.have.lengthOf(1);
        expect(item[0].optionsAnswer).to.equal('1936,1918,1960,1945');
      });

      it('Deve remover 1 resposta e retornar a mesma lista com 2 respostas', function () {
        list.del(1)
        expect(list.list).to.have.lengthOf(2);
      });

    });

  });

})();
