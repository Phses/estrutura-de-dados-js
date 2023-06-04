import Set from "./set-object"

const makeSutNumber = () => {
  return new Set<number>()
}
const makeSutString = () => {
  return new Set<string>()
}

describe("Testes set", () => {
  test("Adicionando e removendo elementos ao set", () => {
    const sut = makeSutNumber();
    sut.add(1);
    sut.add(3);
    sut.add(5);
    sut.delete(3);
    const size = sut.size();
    expect(size).toBe(2)
  })
  test("Teste metodo has", () => {
    const sut = makeSutString();
    sut.add("Pedro");
    sut.add("Camila");
    sut.add("Cecilia");
    const has = sut.has("Pedro");
    expect(has).toBe(true);
  })
})