function positionReceiver(position: number) {
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
  return currentNum;
}

console.log(positionReceiver(7));