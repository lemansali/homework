function Year(year){
if (year % 4 == 0)
    if (year % 100 == 0)
               if (year % 400 == 0) console.log("yes");
                else console.log("no");
    else console.log("yes");
else console.log("no");
}
Year(1999);
Year(2020);
