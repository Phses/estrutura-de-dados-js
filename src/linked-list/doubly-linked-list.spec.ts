import DoublyLinkedList from "./doubly-linked-list"


const makeSutNumber = () => {
    return new DoublyLinkedList<number>();
}


describe('Testes lista duplamente ligada', () => {
    test('Teste inserindo elemento', () => {
        const sut = makeSutNumber();
        sut.insert(4, 0);
        sut.insert(5, 0);
        sut.insert(6, 0);
        const count = sut.size();
        const firstElement = sut.getElementAt(0);
        const lastElement = sut.getElementAt(2);
        expect(count).toBe(3);
        expect(firstElement?.element).toBe(6);
        expect(lastElement?.element).toBe(4);
    })
    test('Teste removendo elementos', () => {
        const sut = makeSutNumber();
        sut.insert(4, 0);
        sut.insert(5, 1);
        sut.insert(6, 2);
        const element = sut.removeAt(1);
        const count = sut.size()
        expect(element?.element).toBe(5);
        expect(count).toBe(2);
    })
})