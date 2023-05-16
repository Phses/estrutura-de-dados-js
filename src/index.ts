import Stack from "./stack/stack-object";
import Queue from "./queue/queue-object";
import Deque from "./queue/deque";

const deque = new Deque<number>();
console.log(deque.count);
deque.addBack(4);
console.log(deque.count);
deque.addBack(3);
console.log(deque.count);
deque.addBack(2);
console.log(deque.count);

console.log(deque.toString());
console.log(deque.count);
console.log(deque.peekBack());
console.log(Object.getOwnPropertyNames(deque));
console.log(Object.keys(deque));

const queue = new Queue<number>();

queue.add(1);
queue.add(2);
queue.add(3);
queue.remove();
queue.add(4);

console.log(queue.items);

const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
// console.log(stack.items);