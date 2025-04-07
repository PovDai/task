"use strict";

/* funcija fgauna sakini kuris atrodo taip
"Studentai:jonas, Maryte,peTrAS,Ona"

Funkcijos darbas grazinti teisingai perrasyta sakini. 
t.y reikia istaisyti vardu rasyma. 
pvz:Jonas,Maryte,Petras,Ona 
*/

/*
-atsiskiriame vardus is originalaus teksto 
-Sumaziname i masasas raides visus zodzius. 
-Isiskaidyti vardus i masyva. 
-sukurti cikla kuris eis per sarasa ir :
-pasiima pirma raide ja padidina 
- apjungia i galutini normalu varda
-pagaminame galutini reikiama sakini. 
*/
function correctSentence(text) {
  var parts = text.split(':'); /// iskaidom teksta i 1 dali iki : ir antra dali kur tik vardai. 

  var names = parts[1].slice(0, -1).toLowerCase().split(', ');
  console.log(parts);
  console.log(names);

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name[0].toUpperCase(); // pasiima pirma raide ir ja padidinam 

    console.log(name);
    console.log(firstLetter);
    var restName = name.slice(1); /// pasilieka visas vardas be pirmos raides. 

    var newName = firstLetter + restName;
    console.log(restName);
    console.log(newName, '---------');
    names[i] = newName;
  }

  return parts[0] + ': ' + names.join(', ') + ' .';
}

console.log(correctSentence("Studentai:jonas, Maryte, peTrAS, Ona"));