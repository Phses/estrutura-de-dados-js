import Deque from "./deque";

export function palindromeChecker(a : string, deque: Deque<string>) : boolean {
    if(a == '' || a === null) {
        return false;
    }
    let lowerCaseString = a.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstLetter, lastLetter;
    for(let i = 0; i < lowerCaseString.length; i++) {
        deque.addBack(lowerCaseString[i]);
    }
    while(deque.size() > 1 && isEqual) {
        firstLetter = deque.removeFront();
        lastLetter = deque.removeBack();
        if(firstLetter !== lastLetter) {
            isEqual = false
        }
    }
    return isEqual;
}