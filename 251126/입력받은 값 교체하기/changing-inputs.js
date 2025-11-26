const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let firstName = input[0];
let familyName = input[1];

console.log(familyName + " " + firstName);
