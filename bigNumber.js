function bigNumbers([a,b,c]){
let max;

    if (a > b && a > c) max = a;
    else if (b > c) max = b;
    else max = c;
    console.log(Math.max(a,b,c));
}
bigNumbers(['2', '-2', '81']);
bigNumbers(['12', '111', '222']);
bigNumbers(['0.1', '2.33', '4.11']);
