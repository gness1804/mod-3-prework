function attachTitle(thing){
  return `DR. ${thing}`;
}

//console.log(attachTitle('Strangelove'));

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);
