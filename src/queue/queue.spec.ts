import Queue from "./queue-object";

const makeSutString = () => {
    return new Queue<string>();
}
const makeSutNumber = () => {
    return new Queue<number>();
}

describe('Confere valores', () => {
    test('Deve retornar true para fila vazia', () => {
      const sut = makeSutString();
      const isEmpty = sut.isEmpty();
      expect(isEmpty).toEqual(true);
    })
    test('Deve retornar false para fila com elementos', () => {
        const sut = makeSutNumber()
        sut.add(5);
        sut.add(2);
        const isEmpty = sut.isEmpty();
        expect(isEmpty).toEqual(false);
    })
    test('Deve retornar o primeiro elemento da fila', () => {
      const sut = makeSutNumber()
      sut.add(5);
      sut.add(6);
      sut.add(8);
      const lastElement = sut.peek();
      expect(lastElement).toEqual(8);
    })
    test('Deve retornar o tamanho exato da fila', () => {
      const sut = makeSutString()
      sut.add("jhon");
      sut.add("jack");
      sut.add("Camila");
      sut.remove();
      const length = sut.size();
      expect(length).toEqual(2);
    })  
})