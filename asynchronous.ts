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

// Task: prepare a code that checks is a request fulfilled in 2 sec
type MyPromise = typeof myPromise;

async function promiseChecker(myPromise: MyPromise, delay: number): Promise<boolean> {
  const testPromise = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve('Successful result');
    }, delay);
  });

  return Promise.race([myPromise, testPromise])
    .then((value) => value === 'Successful result' ? !value : true);
}

// Task: rewrite code from one styles to another