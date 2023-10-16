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
function promiseChecker<T>(
  myPromise: Promise<T>,
  delay: number
): Promise<boolean> {
  const testPromise = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Successful result");
      }, delay);
    });

  return Promise.race([myPromise, testPromise]).then(
    (value) => value === "Successful result"
  );
}

// Async await from callback hell
