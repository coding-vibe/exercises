interface ArithmeticOperations {
  value: number;
  toAdd: (value: number) => this;
  toSubtract: (value: number) => this;
  toMultiply: (value: number) => this;
  toDivide: (value: number) => this;
}

interface AdvancedOperations {
  power: number;
  toSquare: () => this;
  toCube: () => this;
  toPower: (power: number) => this;
}

class Calculator implements ArithmeticOperations, AdvancedOperations {
  value: number;

  power: number;

  currentResult: number;

  constructor(value = 0, power = 1) {
    this.value = value;
    this.power = power;
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

  toSquare(power = 2): this {
    this.currentResult **= power;
    return this;
  }

  toCube(power = 3): this {
    this.currentResult **= power;
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