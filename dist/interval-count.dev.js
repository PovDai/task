"use strict";

function intervalCount(start, end, divider) {
  if (typeof start !== 'number') {
    return "Skaicius turi buti "; /// kad paduodama reiksme butu tik skaicius
  }

  if (typeof end !== 'number') {
    return "Skaicius turi buti";
  }

  if (typeof divider !== 'number') return "Skaicius turi buti ";

  if (start % 1 !== 0) {
    ////// %1 PADARO trupmemine dali, tai jeigu skaicius 0.21 lieka 0.21 ir jis nera =0 blogai. 
    return "Intervalo pradzia turi buti sveikasis skaicius";
  }

  if (end % 1 !== 0) {
    return "Intervalo pradzia turi buti sveikasis skaicius";
  }

  if (divider % 1 !== 0) {
    return "Intervalo pradzia turi buti sveikasis skaicius";
  }

  if (start > end) {
    return "Intervalo pradzia negali buti didesne negu pabaiga.";
  }

  var count = 0; // 1) naivi versija, kai einame per kiekviena skaiciu

  for (var i = start; i <= end; i++) {
    if (i % divider === 0) {
      count++; // pridedu plius 1
    }
  } // 2) labiau optimizuotas naivus variantas


  var trueStart = start;

  for (var _i = trueStart; _i <= end; _i += divider) {
    count++;
  } // 3) galutinis tikslas yra formule, kurios uzuomina yra zemiau pateika lygtis/logika
  // count = (end-start) / divider;


  return "Skai\u010Di\u0173 intervale tarp ".concat(start, " ir ").concat(end, ", besidalijan\u010Di\u0173 be liekanos i\u0161 ").concat(divider, " yra ").concat(count, " vienetai.");
}

console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 11, 5));
console.log(intervalCount(0, 11, 7));
console.log(intervalCount(1, 11, 3));
console.log(intervalCount(1, 11, 5));
console.log(intervalCount(1, 11, 7));
console.log(intervalCount('asd', 11, 7));
console.log(intervalCount(1, 'asd', 7));
console.log(intervalCount(1, 11, 'asd'));
console.log(intervalCount(true, 11, 7));
console.log(intervalCount(1, true, 7));
console.log(intervalCount(1, 11, true));
console.log(intervalCount(undefined, 11, 7));
console.log(intervalCount(1, undefined, 7));
console.log(intervalCount(1, 11, undefined));
console.log(intervalCount(null, 11, 7));
console.log(intervalCount(1, null, 7));
console.log(intervalCount(1, 11, null));
console.log(intervalCount([], 11, 7));
console.log(intervalCount(1, [], 7));
console.log(intervalCount(1, 11, []));
console.log(intervalCount({}, 11, 7));
console.log(intervalCount(1, {}, 7));
console.log(intervalCount(1, 11, {}));
console.log(intervalCount(intervalCount, 11, 7));
console.log(intervalCount(1, intervalCount, 7));
console.log(intervalCount(1, 11, intervalCount));
console.log(intervalCount(1.1, 11.1, 7));
console.log(intervalCount(0, 11.1, 7));
console.log(intervalCount(0, 11, 7.1));
console.log(intervalCount(NaN, 11, 7));
console.log(intervalCount(0, NaN, 7));
console.log(intervalCount(0, 11, NaN));
console.log(intervalCount(Infinity, 11, 7));
console.log(intervalCount(100, 11, 7));
console.log(intervalCount(0, Infinity, 7));
console.log(intervalCount(0, 11, Infinity));
console.log(intervalCount(-Infinity, 11, 7));
console.log(intervalCount(0, -Infinity, 7));
console.log(intervalCount(0, 11, -Infinity));