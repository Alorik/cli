const fs = require('fs');
function print(err, data) {
  console.log(data);
}

fs.readFile('a.text', 'utf-8', print);
fs.readFile('b.text', 'utf-8', print);
console.log('done');