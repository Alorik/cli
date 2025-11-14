const fs = require('fs');

const data = fs.readFileSync('a.text' , 'utf-8'); //synchronously
console.log(data);

const data2 = fs.readFileSync('b.text' , 'utf-8');
console.log(data2);



