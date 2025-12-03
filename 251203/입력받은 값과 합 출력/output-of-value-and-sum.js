const fs = require("fs");
// split 함수를 이용해 여러 줄 입력받기
let input = fs.readFileSync(0).toString().trim().split(' ');

// 첫 번째 줄(input[0])에 이름 입력받기
let a = Number(input[0]);

// 두 번째 줄(input[1])에 나이 입력받기
let b = Number(input[1]);

let re = a + b;

// 결과 출력
console.log(a + " " + b + " " + re);
