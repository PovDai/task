"use strict";

/* funkcija kuri gavusi zodi is jo paadaro koerektika varda
*/
function validName(name) {
  var firstLetter = name[0].toUpperCase();
  var restLetters = name.slice(1).toLowerCase();
  var properName = firstLetter + restLetters;
  return properName;
}

console.log(validName('jonas'), '-->', 'Jonas');
console.log(validName('maRyte'), '-->', 'Maryte');
console.log(validName('jonas'), '-->', 'Jonas');
console.log(validName('jonas'), '-->', 'Jonas');