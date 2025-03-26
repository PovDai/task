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




