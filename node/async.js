// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

const sleepyHello = () => new Promise(resolve => setTimeout(() => {
  console.log('Hello');
  resolve();
}, 1200));

const test = () => {
  sleepyHello();
  console.log('Now this');
};

test();