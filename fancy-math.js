//fancyMath(7,'+',5)->12
//fancyMath(7,'-',5)->2
//fancyMath(7,'*',5)->35
//fancyMath(7,'/',5)->1.4

function fancyMath(a,sign,b){
    if(sign==='+'){
        return a+b;
    }
    if(sign==='-'){
        return a-b;
    }if(sign==='*'){
        return a*b;
    }if(sign==='/'){
        return a/b;
    }
    return 0;
};
console.log(fancyMath(7,'+',5));
console.log(fancyMath(7,'-',5));
console.log(fancyMath(7,'*',5));
console.log(fancyMath(7,'/',5));

/// arba su funkcija ir rodykline viduje funkcija. 

function fancyMath(n1,zenklas,n2){
const func={
    '+':(a,b)=>a+b,
    '-':(a,b)=>a-b,
    '*':(a,b)=>a*b,
    '/':(a,b)=>a/b,
};
const funcToUse=func[zenklas];
if(funcToUse===undefined){
    return ':(';
}
return funcToUse(n1,n2);
}
console.log(fancyMath(7,'+',5));
console.log(fancyMath(7,'-',5));
console.log(fancyMath(7,'*',5));
console.log(fancyMath(7,'/',5));
console.log(fancyMath(7,'**',5));
