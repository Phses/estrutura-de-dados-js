import LinkedList from "./linked-list"

const makeSutNumber = () => {
    return new LinkedList<number>();
}

const makeSutString = () => {
    return new LinkedList<string>();
}

describe('Linked list tests', () => {
    test('Retorna true lista vazia', () => {
        const sut = makeSutNumber();
        const isEmpty = sut.isEmpty();
        expect(isEmpty).toBe(true);
    })
    test('Retorna false lista com elementos', () => {
        const sut = makeSutString();
        sut.push('Pedro');
        const isEmpty = sut.isEmpty();
        expect(isEmpty).toBe(false);
    })
    test('Insere elemento na lista e retorna o indice correto', () => {
        const sut = makeSutNumber();
        sut.push(5);
        sut.push(7);
        sut.push(8);
        sut.insert(6, 1);
        const elementAtIndex = sut.getElementAt(1);
        expect(elementAtIndex?.element).toBe(6);
    })
    test('retorna o numero de elementos da lista', () => {
        const sut = makeSutNumber();
        sut.push(5);
        sut.push(7);
        sut.push(8);
        sut.insert(6, 1);
        const count = sut.size();
        expect(count).toBe(4);
    })
    test('remove elemento da lista metodo remove', () => {
        const sut = makeSutNumber();
        sut.push(5);
        sut.push(7);
        sut.push(8);
        sut.remove(7);
        const index = sut.indexOf(7);
        expect(index).toBe(-1);
    })
    test('remove elemento da lista metodo removeAt', () => {
        const sut = makeSutNumber();
        sut.push(5);
        sut.push(7);
        sut.push(8);
        const element = sut.removeAt(1);
        const index = sut.indexOf(1);
        expect(element?.element).toBe(7);
        expect(index).toBe(-1);
    })
})