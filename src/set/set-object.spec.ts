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
  test("Teste uniao", () => {
    const sutA = makeSutNumber();
    sutA.add(1);
    sutA.add(2);
    sutA.add(3);
    const sutB = makeSutNumber();
    sutB.add(3);
    sutB.add(4);
    sutB.add(5);
    sutB.add(6);
    const unionAB = sutA.union(sutB).values()
    const expected = [1,2,3,4,5,6];
    expect(unionAB).toEqual(expected)
  })
  test("Teste intersecao", () => {
    const sutA = makeSutNumber();
    sutA.add(1);
    sutA.add(2);
    sutA.add(3);
    const sutB = makeSutNumber();
    sutB.add(2);
    sutB.add(3);
    sutB.add(4);
    const intersectionAB = sutA.intersection(sutB).values()
    const expected = [2,3];
    expect(intersectionAB).toEqual(expected)
  })
})