//3->3.00 Eur
// 3.99->3.99 eur 

function moneyFormat(money){
    return money.toFixed(2)+' Eur' /// padaro is 3 ir 3.00 kaina. 
}
console.log(moneyFormat(3));

/// jeigu be fixed padaryti ats.

function moneyFormat2(money){
// is money reikia gauti dali po kalbelio

const decimalPart=(money-Math.floor(money))*100; // turime desimtaine dali  // 0.1 

// jeigu po kablelio yra 2 skaitmenys - nieko daryti nereikia 
    if(decimalPart===0){
    return money+ '.00 Eur';
}
// jeigu po kablelio yra 1 skaitmuo pridedam 0
if(decimalPart%10===0){
    return money+' 0 Eur'
}
// jeigu po kalblelio yra 0 skaitmenu pridedam 2 nulius 
//



    return money+' Eur'
}
console.log(moneyFormat2(3.1));
console.log(moneyFormat2(3.15));

function moneyFormat3(money){
    const strMoney=''+money; /// taip pakeite i string eilute is number. 
    const dotPosition=strMoney.indexOf('.');/// tasko vieta gauname kad zinoti kiek po kablelio reiks. 
    if(dotPosition===-1){ /// -1 pozicija. 
        return money+ ' .00 Eur'
    }
    const afterDot=strMoney.slice(dotPosition+1)// nes imam nuo tasko 
if(afterDot.length===1){
    return money+'0 Eur'
} 
    return money+ " Eur";
}


console.log(moneyFormat3(3.1));
console.log(moneyFormat3(3.15));