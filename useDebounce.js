let ITERATION = 1;

function debounce(func, delay) {
  let timeoutID;
  const debouncedFunction = () => {
    if (ITERATION === 1) {
      ITERATION += 1;
      timeoutID = setTimeout(func, delay);
    } else {
      clearTimeout(timeoutID);
      setTimeout(func, delay);
    }
  };

  return debouncedFunction();
}

function showDate() {
  const date = new Date();
  return console.log(date);
}

console.log(debounce(showDate, 1000));
console.log(debounce(showDate, 10000));
