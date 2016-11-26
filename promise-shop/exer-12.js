var http = require('q-io/http');

http.read('http://localhost:1337').then((content) => {
  console.log(JSON.parse(content));
}, console.error).done();

