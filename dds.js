function calculateDDS(arr) {
    let sum = 0;

    for(let price of arr) {
        sum += Number(price);
    }
	
	let dds = sum * 0.2;
	let total = sum * 1.2;

    console.log(`SUM = ${sum}`);
    console.log(`DDS = ${dds}`);
    console.log(`TOTAL = ${total}`);
}
calculateDDS(['2.20', '7.60', '5.50']);
