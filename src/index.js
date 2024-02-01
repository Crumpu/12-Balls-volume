'use strict';
let result = 0;
let wallThickness = 10;
let minRadius = 240;
let quantityOfBalls = 12;
for (let i = 0; i < quantityOfBalls; i++) {
  let r = minRadius + wallThickness * i;
  let V = (4 / 3) * Math.PI * r ** 3;
  result += V;
  let formula = `(4 / 3) * Pi * (${r}) ^ 3`;
  list.innerHTML +=
    '<li>' + formula + ' = ' + (V / 10 ** 9).toFixed(3) + 'm3' + '</li>';
}

let resultInSI = result / 10 ** 9;
document.getElementById('result').textContent = `Ответ: суммарный объем шаров = ` + resultInSI.toFixed(3) + `м3.`;
