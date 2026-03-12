const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let average = (a + b) / 2;

console.log(a + b, average.toFixed(1));