import Deque from "./deque"
import { palindromeChecker } from "./palindrome-checker";

const makeSut = () => {
   return new Deque<string>();
}

describe('Confere valores deque', () => {
    test('Deve retornar true para palindromo', () => {
      const sut = makeSut();
      const string = "kayak"
      const isEqual = palindromeChecker(string, sut)
      expect(isEqual).toEqual(true);
    })
    test('Deve retornar true para palindromo', () => {
        const sut = makeSut();
        const string = "level"
        const isEqual = palindromeChecker(string, sut)
        expect(isEqual).toEqual(true);
      })
      test('Deve retornar true para palindromo', () => {
        const sut = makeSut();
        const string = "Was it a car or a cat I saw"
        const isEqual = palindromeChecker(string, sut)
        expect(isEqual).toEqual(true);
      })
      test('Deve retornar true para palindromo', () => {
        const sut = makeSut();
        const string = "Step on no Pets"
        const isEqual = palindromeChecker(string, sut)
        expect(isEqual).toEqual(true);
      })
      test('Deve retornar false', () => {
        const sut = makeSut();
        const string = "casa"
        const isEqual = palindromeChecker(string, sut)
        expect(isEqual).toEqual(false);
      })
      test('Deve retornar false', () => {
        const sut = makeSut();
        const string = "Computador"
        const isEqual = palindromeChecker(string, sut)
        expect(isEqual).toEqual(false);
      })
      test('Deve retornar false string vazia', () => {
        const sut = makeSut();
        const string = ""
        const isEqual = palindromeChecker(string, sut)
        expect(isEqual).toEqual(false);
      })
})