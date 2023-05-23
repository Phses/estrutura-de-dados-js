import Deque from "./deque";

const makeSutString = () => {
    return new Deque<string>();
}
const makeSutNumber = () => {
    return new Deque<number>();
}

describe('Confere valores deque', () => {
    test('Deve retornar true para deque vazio', () => {
      const sut = makeSutString();
      const isEmpty = sut.isEmpty();
      expect(isEmpty).toEqual(true);
    })
    test('Deve retornar false para fila com elementos', () => {
        const sut = makeSutNumber()
        sut.addFront(5);
        sut.addFront(2);
        const isEmpty = sut.isEmpty();
        expect(isEmpty).toEqual(false);
    })
    test('Deve retornar o elemento retirado', () => {
      const sut = makeSutNumber()
      sut.addBack(5);
      sut.addBack(2);
      const lastElement = sut.removeBack();
      expect(lastElement).toEqual(2);
  })
    test('Deve retornar o primeiro elemento do deque', () => {
      const sut = makeSutNumber()
      sut.addFront(5);
      sut.addFront(6);
      sut.addFront(8);
      const element = sut.peekFront();
      expect(element).toEqual(8);
    })
    test('Deve retornar o ultimo elemento do deque', () => {
        const sut = makeSutNumber()
        sut.addBack(5);
        sut.addBack(6);
        sut.addBack(8);
        const element = sut.peekBack();
        expect(element).toEqual(8);
      })
    test('Deve retornar o tamanho exato da fila', () => {
      const sut = makeSutString()
      sut.addFront("jhon");
      sut.addFront("jack");
      sut.addBack("Camila");
      sut.addBack("joao");
      sut.removeBack();
      const size = sut.size();
      expect(size).toEqual(3);
    })  
})