'use strict';
let result = 0;
let wallThickness = 10;
let minRadius = 240;
let quantityOfBalls = 12;
for (let i = 0; i < quantityOfBalls; i++) {
  let r = minRadius + wallThickness * i;
  let V = (4 / 3) * Math.PI * r ** 3;
  result += V;
}

let resultInSI = result / 10 ** 9;
console.log(`total internal volume in SI system = ${resultInSI.toFixed(3)} m3`);
