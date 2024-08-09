
// function random(resolve) {
//     setTimeout(resolve, 3000);
// }

// let p = new Promise(random);

// function callback(){
//   console.log("promise completed ");

// }
// p.then(callback);

// const fs = require('fs');

// function readTheFile (sendTheFinalValueHere) {

//   fs.readFile('k.txt' , 'utf-8' , function(err , data){
//     sendTheFinalValueHere(data);
//   }
// ); 


// }

// function readFile (fileName) {
//   return new Promise (readTheFile);
// }

// const p = readFile();

// function callback (contents) {
//   console.log(contents);
// }

// p.then(callback);

const p = new Promise(function(resolve) {
  let c = 0 ;
  for (let i = 0; i < 10; i++) {
    c++;
    console.log(c);
  }
  resolve();
})

function callback() {
      console.log('hi there!!!!');
}

p.then(callback);
