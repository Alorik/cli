const fs = require("fs");
function print (err,data) {
    console.log(data);
}
fs.readFileSync("a.text","utf-8",print);

