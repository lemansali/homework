function points([x1, y1, x2, y2]) {
	
	let oneRes = Math.pow((Number(x2) - Number(x1)), 2);
	let twoRes = Math.pow((Number(y2) - Number(y1)), 2);
	
	let result = Math.sqrt(oneRes + twoRes);
	
    console.log(result);
}

points(['4', '2', '6', '8']);
