interface ArithmeticOperations {
  toAdd: (value: number) => this;
  toSubtract: (value: number) => this;
  toMultiply: (value: number) => this;
  toDivide: (value: number) => this;
}

interface AdvancedOperations {
  toSquare: () => this;
  toCube: () => this;
  toPower: (power: number) => this;
}

class Calculator implements ArithmeticOperations, AdvancedOperations {
  currentResult: number;

  constructor(value = 0) {
    this.currentResult = value;
  }

  toAdd(value: number): this {
    this.currentResult += value;
    return this;
  }

  toSubtract(value: number): this {
    this.currentResult -= value;
    return this;
  }

  toMultiply(value: number): this {
    this.currentResult *= value;
    return this;
  }

  toDivide(value: number): this {
    this.currentResult /= value;
    return this;
  }

  toSquare(): this {
    this.currentResult **= 2;
    return this;
  }

  toCube(): this {
    this.currentResult **= 3;
    return this;
  }

  toPower(power: number): this {
    this.currentResult **= power;
    return this;
  }

  getResult(): number {
    return this.currentResult;
  }
}

const myCalculator = new Calculator(1);

console.log(myCalculator
  .toAdd(20)
  .toSubtract(10)
  .toMultiply(10)
  .toDivide(5)
  .toSquare()
  .toCube()
  .toPower(10)
  .getResult());