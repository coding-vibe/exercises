// Task: prepare a code example that promisifies callback handler

// Task: prepare a code that checks is a request fulfilled in 2 sec
const promise = new Promise((resolve, reject) => {
  const successful = true;
  setTimeout(() => {
    if (successful) {
      resolve('Successful result');
    } else {
      reject('Fatal error');
    }
  }, 2000);
});
function promiseState(promise) {
  const pendingState = { status: 'pending' };
  return Promise.race([promise, pendingState])
    .then(
      (value) =>
        value === pendingState
          ? value
          : { status: 'fulfilled', value },
      (reason) => ({ status: 'rejected', reason })
    );
}
promiseState(promise)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// Task: rewrite code from one styles to another