import Stack from "./stack/stack-object";
import Queue from "./queue/queue-object";

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