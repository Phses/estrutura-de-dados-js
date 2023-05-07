import Stack from "./stack-object";

class Calc {
  private _remStack: Stack
  constructor(remStack: Stack) {
    this._remStack = remStack;
  }

  decimalToBinary(decNumber: number) : string {
    let number = decNumber;
    let rem: number;
    let binaryString: string = "";
  
    while(number > 0) {
      rem = Math.floor(number % 2);
      this._remStack.push(rem);
      number = Math.floor(number /2);
    }
  
    while(!this._remStack.isEmpty()) {
      const value = this._remStack.pop() ?? 0; 
      binaryString += value.toString();
    }
  
    return binaryString;
  }
}

export default Calc;