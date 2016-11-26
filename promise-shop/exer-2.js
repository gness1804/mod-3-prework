require('es6-promise');

    var val = 'FULFILLED!'
    var promise = new Promise(function (fulfill, reject) {
      setTimeout(()=>{
       fulfill( val); 
      }, 300);
    });
promise.then(
    console.log(
      val
      ));
