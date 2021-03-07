function primeNumber(n){
    n=Number(n)
let i = 1
let br;
    br = 0;
    while (i <= n)
{
    if (n % i == 0) br++;
    i++;
}
    if (br == 2) console.log("True");
    else console.log("False");
}
console.log(primeNumber('4'));
console.log(primeNumber('5'));
console.log(primeNumber('40'));
console.log(primeNumber('73'));
