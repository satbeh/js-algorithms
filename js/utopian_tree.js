var inputarr = [];
var input_currentline = 0;

function readLine() {
	return inputarr[input_currentline++];
}

function processData(input) {
	inputarr = input.split("\n");
	main();
}

function main() {
	var t = parseInt(readLine());
	for (var a0 = 0; a0 < t; a0++) {
		var n = parseInt(readLine());		
		console.log(getVal(1, n, 2));
	}
}

function getVal(val, n, inc){
	if(n == 0)
		return val;
	else{
		if(inc == 2){
			inc = 1;
			val *= 2;
		}else{
			val += 1;
			inc = 2;
		}
		return getVal(val, n-1, inc);
	}	
}

processData("3\n" + 
		"0\n" + 
		"1\n" + 
		"4\n");