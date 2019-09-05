// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

//use for network calls 
const sleepyHello = () => new Promise(resolve => setTimeout(() => {
  console.log('Hello');
  resolve();
}, 1200));

//wrapper function
const test = () => {
  sleepyHello()
    //option 1
    .then(() => { // use .then to print in order
      console.log('Now this');
    });
};

// //option 2 
// const test = async () => {
//   await sleepyHello()
//   console.log("Now this");
// }

test();