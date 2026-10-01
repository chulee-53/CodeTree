const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let h = Number(input[0]) / 100;
let w = Number(input[1]);

let bmi = parseInt(w / (h ** 2));

console.log(bmi);
if (bmi >= 25) {
    console.log("Obesity");
}