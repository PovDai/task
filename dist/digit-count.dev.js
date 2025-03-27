"use strict";

/*
Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
priima vieną kintamąjį
jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
priešingu atveju, funkcija tęsia darbą
į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
gražina skaitmenų kiekį
TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/
function digitCount(n) {
  if (typeof n !== 'number') {
    return "Skaicius turi buti, tekstas";
    /*
    } if (n===Infinity||n===Infinity||isNaN(n)){
    return `Reikalingas normalus skaicius`;*/
  }

  if (!isFinite(n)) /// !isFinite ar yra baigtinis skaicius. ar turi skaitmenu savyje. 
    return "Reikalingas normalus skaicius";
  var numberAsString = '' + n;
  var count = numberAsString.length; // numberAsString sutekstinam reiksme. const numberAsString=''+n; tu parduoti skaiciu o jis tampa'skaicius';
  // 5
  // 159
  /// 123456

  if (n % 1 !== 0) {
    // jeigu padalinam be liekanos ir gauna 0.11 po kalbelio reiskias atimam. 
    count--;
  }

  if (n < 0) {
    // ar skaicius ne minusinis. 
    count--;
  }

  return count;
}

;
console.log(digitCount());
console.log(digitCount('asadad'));
console.log(digitCount(1545241));
console.log(digitCount(undefined));
console.log(digitCount(Infinity));
console.log(digitCount(false));
console.log(digitCount([]));
console.log(digitCount(digitCount));
console.log(digitCount(null));
console.log(digitCount(-Infinity));
console.log(digitCount(5.5));
console.log(digitCount(5.5, '---', 10));
console.log(digitCount(-5.5));
console.log(digitCount(1000000));
console.log(digitCount(-3));
console.log(digitCount(3, 6));