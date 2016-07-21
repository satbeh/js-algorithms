function processData(input) {
	var inputarr = input.split("\n");	
	var t = inputarr[0];
	for (var a0 = 1; a0 <= t; a0++) {
		var n = inputarr[a0].split(" ").map(Number);
		var n1 = n[0];
		var n2 = n[1];			
		var sqrt1 = Math.sqrt(n1);
		var sqrt2 = Math.sqrt(n2);
		var start = Math.floor(sqrt1);
		var end = Math.floor(sqrt2);
		
		if(sqrt1 > start)
			start++;		
		
		res = end-start+1;
		if(res < 0) res = 0;
		console.log(res);
	}
}

processData("2\n" + 
		"1 1000000000\n" + 
		"17 24\n");

