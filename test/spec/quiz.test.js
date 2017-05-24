(function () {
  'use strict';

  var quiz1 = new Quiz(1, 'Aulas de História');
  var quiz2 = new Quiz(2, 'Aulas de Inglês');

  describe('Testando o questionário', function () {
    
    describe('Model', function () {

      it('Deve retornar um objeto Quiz', function () {
        expect(quiz1.id).to.equal(1);
        expect(quiz1.title).to.equal('AULAS DE HISTÓRIA');
      });

    });

    describe('List', function () {

      let list = new List(obj => console.log(obj));
      list.add(quiz1);
      list.add(quiz2);

      it('Deve retornar a lista de questionários com 2 questionários', function () {
        expect(list.list).to.have.lengthOf(2);
      });

      it('Deve retornar apenas o questionário com o id = 2', function () {
        let itemId = list.searchById(2)
        expect(itemId.title).to.equal('AULAS DE INGLÊS');
      });

      it('Deve remover 1 questionário e retornar a mesma lista com 1 questionário', function () {
        list.del(1)
        expect(list.list).to.have.lengthOf(1);
      });

    });

  });

})();
