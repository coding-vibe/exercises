// Task: prepare a code example that promisifies callback handler
const promisify =
  (fn) =>
  (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

// Task: prepare a code that checks is a request fulfilled in 2 se

type MyPromise = typeof myPromise;

async function promiseChecker (myPromise: MyPromise, delay: number) {
  const testPromise = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve('Successful result');
    }, delay);
  });

  return Promise.race([myPromise, testPromise])
    .then((value) => value === 'Successful result' ? false : true);
}

// Task: rewrite code from one styles to another