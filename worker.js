const { parentPort } = require("worker_threads");

// getting number
parentPort.on("message", (number) => {
  console.log("number  is", number);
  const data = generatePrime(number);
  parentPort.postMessage(data);
});

// to check number is prime or not
const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// creating an array of prime number
const generatePrime = (num) => {
  const arr = [];
  let i = 2;
  while (arr.length < num) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i = i === 2 ? i + 1 : i + 2;
  }
  return arr;
};
