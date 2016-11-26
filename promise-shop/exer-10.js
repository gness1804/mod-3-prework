var Q = require('q');

function alwaysThrows(){
  console.log(new Error("OH NOES"));
}

function iterate(num){
  console.log(num);
  return num + 1;
}

function foo(){
  return 'foo'; 
}

Q.fcall(iterate(1)).then(iterate(2)).then(iterate(3)).then(iterate(4)).then(iterate(5)).then(alwaysThrows()).then(iterate(6)).then(iterate(7)).then(iterate(8)).then(iterate(9)).then(iterate(10)).then(null, console.log);
