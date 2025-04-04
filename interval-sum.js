/*Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30
*/

function intervalSum(start,end){
    let sum=0; // deklaruojam kad pradedam nuo 0 skaiciuti suma. 
    for(let i=start; i<=end ;i++){ // cia padarome pradzia start is funkcijos ir end is funkcijos zymes. 
        sum+=i;}
        sum=(end*(end+1))/2;
    return sum;
}

// kitas variantas per funkcija kai reikia skaiciuoti didelis skaicius ten mldr. 

function intervalSum(start, end) {
    let sum = 0;

    if (start === 0) { // tinka jeigu startas yra 0 ir reikia suskaiciuoti ten mldr reiksmes. 
        sum = (end * (end + 1)) / 2;// pagal trikampio ploto formule. cia pvz pagrindas 5 zymes o i virsu 4 padalinam is 2. gaunasi 10. 
    } else {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    }

    return sum;
};

/*for (let i=5;i>0;i--){ // NAUDOJAMAS APSUKIMUI. 
        console.log('APSUKIMAS:',i)};  // nes pradedame nuo 5 del to jis varys iki infinity */


console.log('1).',intervalSum(0,0));
console.log(intervalSum(0,4));
console.log(intervalSum(0,100));
console.log(intervalSum(574,815));
console.log(intervalSum(-50,50));
console.log(intervalSum(-70,30));
console.log(intervalSum(0,2));
console.log(intervalSum(0,6));
console.log(intervalSum(0,10_000_000));/// galima mln per _ skirti. 
console.log(intervalSum(0,1000_000_000));
// 1=1*10 pakelta 0
// 10=1*10 pakelta 1 
// 31.41=3.141*10^1
// e reiskia 10^
// 1_000_000=1*10^6

console.log(100000000000000000000); // eiluteje atsakymo duoda 21 simboli. 
console.log(1000000000000000000000);

function intervalCount(start, end, divider) {
    let count = 0;

    // 1) naivi versija, kai einame per kiekviena skaiciu
    // for (let i = start; i <= end; i++) {
    //     if (i % divider === 0) {
    //         count++;
    //     }
    // }

    // 2) labiau optimizuotas naivus variantas
    const trueStart = start;
    for (let i = trueStart; i <= end; i += divider) {
        count++;
    }

    // 3) galutinis tikslas yra formule, kurios uzuomina yra zemiau pateika lygtis/logika
    // count = (end-start) / divider;

    return `Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;
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

console.log(intervalCount(0.1, 11, 7));
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




