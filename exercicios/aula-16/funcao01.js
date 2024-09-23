function parimp(n) {
    if (n % 2 == 0) {
        return 'Par';
    } else {
        return 'Impar';
    }
}

/*
let res = parimp(11);
console.log(res);
*/

//console.log(parimp(4));

let n1 = 5;
let n2 = 7 ;
let s = n1 + n2;
let res = parimp(s);
console.log(`A soma de ${n1} com ${n2} resulta em ${s} que é um número ${res}.`);