function all(promise1, promise2){
 return new Promise((fulfill, reject) => {
   let counter = 0;
   let result = [];

   promise1.then((val) => {
     result[0] = val;
     counter++;

     if(counter >= 2){
       fulfill(result);
     }
   });

   promise2.then((val) => {
     result[1] = val;
     counter++;

     if(counter >= 2){
       fulfill(result);
     }
   });

 });
}

all(getPromise1(), getPromise2()).then(console.log);
