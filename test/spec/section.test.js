(function () {
  'use strict';

  var section1 = new Section(1, 1, 'Guerra Fria');
  var section2 = new Section(2, 2, 'Verbo To Be');
  var section3 = new Section(3, 1, 'II Guerra Mundial');

  describe('Testando a seção', function () {
    
    describe('Model', function () {

      it('Deve retornar um objeto Section', function () {
        expect(section3.id).to.equal(3);
        expect(section3.quizId).to.equal(1);
        expect(section3.title).to.equal('II Guerra Mundial');
      });

    });

    describe('List', function () {

      let list = new ListSection(obj => console.log(obj));
      list.add(section1);
      list.add(section2);
      list.add(section3);

      it('Deve retornar a lista de seções com 3 seções', function () {
        expect(list.list).to.have.lengthOf(3);
      });

      it('Deve retornar apenas a seção com o id = 2', function () {
        let itemId = list.searchById(2)
        expect(itemId.title).to.equal('Verbo To Be');
      });

      it('Deve retornar apenas as seções que fazem parte do questionário com id = 1', function () {
        let items = list.searchByQuizId(1)
        expect(items).to.have.lengthOf(2);
      });

      it('Deve remover 1 seção e retornar a mesma lista com 2 seções', function () {
        list.del(1)
        expect(list.list).to.have.lengthOf(2);
      });

    });

  });

})();
