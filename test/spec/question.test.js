(function () {
  'use strict';

  var question1 = new question(1, 1, 'Quais os países envolvidos na guerra fria');
  var question2 = new question(2, 3, 'Em que ano terminou a II guerra mundial?');
  var question3 = new question(3, 1, 'Quantos anos durou a guerra fria?');

  describe('Testando a questão', function () {
    
    describe('Model', function () {

      it('Deve retornar um objeto question', function () {
        expect(question3.id).to.equal(3);
        expect(question3.quizId).to.equal(1);
        expect(question3.title).to.equal('II Guerra Mundial');
      });

    });

    describe('List', function () {

      let list = new Listquestion(obj => console.log(obj));
      list.add(question1);
      list.add(question2);
      list.add(question3);

      it('Deve retornar a lista de questões com 3 questões', function () {
        expect(list.list).to.have.lengthOf(3);
      });

      it('Deve retornar apenas a questão com o id = 2', function () {
        let itemId = list.searchById(2)
        expect(itemId.title).to.equal('Verbo To Be');
      });

      it('Deve retornar apenas as questões que fazem parte do questionário com id = 1', function () {
        let items = list.searchByQuizId(1)
        expect(items).to.have.lengthOf(2);
      });

      it('Deve remover 1 questão e retornar a mesma lista com 2 questões', function () {
        list.del(1)
        expect(list.list).to.have.lengthOf(2);
      });

    });

  });

})();
