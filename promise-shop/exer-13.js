var http = require('q-io/http');

http.read('http://localhost:7000/').then((contentId) => {
  return http.read('http://localhost:7001/' + contentId); 
  }).then((json) => {console.log(JSON.parse(json))}).then(null, console.error).done();
