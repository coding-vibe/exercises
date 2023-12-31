const fibonacciCache = {};

function fibonacci(position) {
  if (fibonacciCache[position]) {
    return fibonacciCache[position];
  }

  if (position === 0) {
    return 0;
  }

  let prevNum = 0;
  let currentNum = 1;

  for (let i = 1; i < position; i += 1) {
    const nextNum = prevNum + currentNum;
    prevNum = currentNum;
    currentNum = nextNum;
  }
  fibonacciCache[position] = currentNum;
  return currentNum;
}

console.log(fibonacciHandler(9)); //34
console.log(fibonacciHandler(9)); //34

// function fibonacciHandler(position) {
//   if (position === 0) {
//     return 0;
//   }

//   let prevNum = 0;
//   let currentNum = 1;

//   for (let i = 2; i <= position; i++) {
//     [prevNum, currentNum] = [currentNum, prevNum + currentNum];
//   }

//   return currentNum;
// }
