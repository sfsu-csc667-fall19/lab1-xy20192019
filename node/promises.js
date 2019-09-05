
const promiseExample = () => {
  return new Promise((resolve, reject) => { 
    //Do anything you want
    //finish when resolve() is called
    setTimeout(() => { 
      resolve('Hello world') 
    }, 3000);
  });
};

//when promise is done then run the call back function
promiseExample()
  .then((res) => console.log(res))
  .catch((e) => console.log('something went wrong!'));

console.log('hi');

//hi prints first then Hello world after 3 seconds.
