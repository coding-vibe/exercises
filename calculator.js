interface ArithmeticOperations {
    value1: number;
    value2?: number;
    toAdd: (value1: number, value2?: number) => this;
    toSubtract: (value1: number, value2?: number) => this;
    toMultiply: (value1: number, value2?: number) => this;
    toDivide: (value1: number, value2?: number) => this;
}

interface AdvancedOperations {
    valueToPow?: number;
    power: number;
    toSquare: (valueToPow?: number) => this;
    toCube: (valueToPow?: number) => this;
    toPower: (power: number, valueToPow?: number) => this;
}

class Calculator implements ArithmeticOperations, AdvancedOperations {
  value1: number;
  value2: number;
  valueToPow: number;
  power: number;
  currentResult: number;

  constructor(value1 = 0, value2 = 0, valueToPow = 0, power = 1) {
    this.value1 = value1;
    this.value2 = value2;
    this.valueToPow = valueToPow;
    this.power = power;
    this.currentResult = 0;
  }

  toAdd(value1: number, value2?: number): this {
    if (value2) {
      this.currentResult = value1 + value2;
    } else {
      this.currentResult += value1;
    }
    return this;
  }

  toSubtract(value1: number, value2?: number): this {
    if (value2) {
      this.currentResult = value1 - value2;
    } else {
      this.currentResult -= value1;
    }
    return this;
  }

  toMultiply(value1: number, value2?: number): this {
    if (value2) {
      this.currentResult = value1 * value2;
    } else {
      this.currentResult *= value1;
    }
    return this;
  }

  toDivide(value1: number, value2?: number): this {
    if (value2) {
      this.currentResult = value1 / value2;
    } else {
      this.currentResult /= value1;
    }
    return this;
  }

  toSquare(valueToPow?: number, power = 2): this {
    if (valueToPow) {
      this.currentResult = valueToPow ** power;
    } else {
      this.currentResult **= power;
    }
    return this;
  }

  toCube(valueToPow?: number, power = 3): this {
    if (valueToPow) {
      this.currentResult = valueToPow ** power;
    } else {
      this.currentResult **= power;
    }
    return this;
  }

  toPower(power: number, valueToPow?: number): this {
    if (valueToPow) {
      this.currentResult = valueToPow ** power;
    } else {
      this.currentResult **= power;
    }
    return this;
  }

  getResult(): number {
    return this.currentResult;
  }
}

const myCalculator = new Calculator();

console.log(myCalculator
  .toAdd(10, 10)
  .toSubtract(10)
  .toMultiply(10)
  .toDivide(5)
  .toSquare()
  .toCube()
  .toPower(11)
  .getResult());