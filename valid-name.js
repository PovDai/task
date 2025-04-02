/* funkcija kuri gavusi zodi is jo paadaro koerektika varda
*/

function validName(name){
    const firstLetter=name[0].toUpperCase();
    const restLetters=name.slice(1).toLowerCase();

    let properName=firstLetter+restLetters;

    return properName;
}
console.log(validName('jonas'),'-->','Jonas');
console.log(validName('maRyte'),'-->','Maryte');
console.log(validName('jonas'),'-->','Jonas');
console.log(validName('jonas'),'-->','Jonas');