import Stack from "./stack-object";

const makeSut = () => {
  return new Stack();
}
describe('Confere valores', () => {
  test('Deve retornar true para pilha vazia', () => {
    const sut = makeSut();
    const isEmpty = sut.isEmpty();
    expect(isEmpty).toEqual(true);
  })
  test('Deve retornar false para pilha com elementos', () => {
    const sut = makeSut()
    sut.push(5);
    sut.push(2);
    const isEmpty = sut.isEmpty();
    expect(isEmpty).toEqual(false);
  })
  test('Deve retornar o ultimo elemento da pilha', () => {
    const sut = makeSut()
    sut.push(5);
    sut.push(6);
    sut.push(8);
    const lastElement = sut.peek();
    expect(lastElement).toEqual(8);
  })
  test('Deve retornar o tamanho exato da pilha', () => {
    const sut = makeSut()
    sut.push(5);
    sut.push(6);
    sut.push(8);
    sut.pop();
    const length = sut.size();
    expect(length).toEqual(2);
  })
})
