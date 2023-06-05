import Stack from "./stack/stack-object";
import Queue from "./queue/queue-object";
import Deque from "./queue/deque";
import DoublyLinkedList from "./linked-list/doubly-linked-list";

console.log('------------Set---------');



console.log('--------Double Linked List--------------');
const doublyLinkedList = new DoublyLinkedList<number>();

doublyLinkedList.insert(1, 0);
doublyLinkedList.insert(2, 1);
doublyLinkedList.insert(3, 2);

console.log(doublyLinkedList.size());
console.log(doublyLinkedList.removeAt(1)?.element);
console.log(doublyLinkedList.size());

console.log('--------Deque--------------');

const deque = new Deque<number>();

deque.addBack(4);
deque.addBack(3);
deque.addBack(2);
deque.addBack(1);



console.log(deque.removeFront());
console.log(deque.removeBack());
console.log(deque.removeFront());
console.log(deque.removeBack());
console.log(deque.toString());
console.log(deque.peekBack());
console.log(Object.getOwnPropertyNames(deque));
console.log(Object.keys(deque));

console.log('--------Queue--------------')

const queue = new Queue<number>();

queue.add(1);
queue.add(2);
queue.add(3);
queue.remove();
queue.add(4);

console.log(queue.items);

console.log('--------Stack--------------')

const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
// console.log(stack.items);