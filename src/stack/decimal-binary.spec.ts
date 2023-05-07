import Stack from "./stack-object";
import Calc from "./decimal-binary";

const makeSut = () => {
  const stack = new Stack();
  return new Calc(stack);
}

describe('Confere valores', () => {
  test('Deve retornar valor binario correto decimal 10', () => {
    const sut = makeSut();
    const result = sut.decimalToBinary(10);
    expect(result).toEqual("1010");
  })
  test('Deve retornar valor binario correto decimal 45', () => {
    const sut = makeSut();
    const result = sut.decimalToBinary(45);
    expect(result).toEqual("101101");
  })
})