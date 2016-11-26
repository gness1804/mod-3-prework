const count = 70;

const promise = new Promise((fulfill, reject) => {
  if (count > 90) {
  fulfill('The number is higher than 90.');
  } else {
  reject(new Error('The number is too low.'));
  }
});

promise.catch((error) => {
  console.log(error.message);
});

const promise2 = Promise.resolve('Success!');
promise2.then(console.log);

const promise3 = Promise.reject(new Error('Failure!'));
promise3.catch((error) => {
   console.log(error.message);
});
