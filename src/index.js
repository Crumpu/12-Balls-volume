'use strict';
let result = 0;
for (let r = 240; r <= 350; r++) {
  if (r % 10 !== 0) continue;
  let V = (3 / 4) * Math.PI * r ** 3;
    result += V;
}

let resultInSI = result / 10 ** 9;
  document.getElementById('testData').textContent = resultInSI.toFixed(3);
