"use strict";

//fancyMath(7,'+',5)->12
//fancyMath(7,'-',5)->2
//fancyMath(7,'*',5)->35
//fancyMath(7,'/',5)->1.4
function fancyMath(a, sign, b) {
  if (sign === '+') {
    return a + b;
  }

  if (sign === '-') {
    return a - b;
  }

  if (sign === '*') {
    return a * b;
  }

  if (sign === '/') {
    return a / b;
  }

  return 0;
}

;
console.log(fancyMath(7, '+', 5));
console.log(fancyMath(7, '-', 5));
console.log(fancyMath(7, '*', 5));
console.log(fancyMath(7, '/', 5));