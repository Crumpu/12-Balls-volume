'use strict';
let result = 0;
let list = document.getElementById('list');
let counter = 0;
for (let r = 240; r <= 350; r++) {
  if (r % 10 !== 0) continue;
  let V = (3 / 4) * Math.PI * r ** 3;
  let formula = `(3 / 4) * Pi * (${r}) ^ 3`;
  result += V;
  counter++;
  list.innerHTML +=
    '<li>' + formula + ' = ' + ((V / 10 ** 9).toFixed(3))+ 'm3' + '</li>';
}

let resultInSI = result / 10 ** 9;
document.getElementById('result').textContent = `Ответ: суммарный объем шаров = ` + resultInSI.toFixed(3) + `м3.`;
