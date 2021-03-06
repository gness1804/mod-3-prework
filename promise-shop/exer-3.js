var promise = new Promise(function (fulfill, reject) {
      setTimeout(reject, 300, new Error('REJECTED!'));
});

    function onFulfill () {
      console.log('The operation succeeded.')
    }

    function onReject (error) {
        console.log(error.message);
    }

    promise.then(onFulfill, onReject);
