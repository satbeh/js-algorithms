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
		var n = readLine();
		var numArr = n.split("");
		console.log(getDiv(0, parseInt(n), numArr, 0));
	}
}

function getDiv(val, n, numArr, idx){
	if(idx > numArr.length)
		return val;
	else{
		if(numArr[idx] > 0 && n % numArr[idx] == 0){
			val++;
		}
		idx++;
		return getDiv(val, n, numArr, idx);
	}	
}

processData("2\n" + 
		"12\n" + 
		"1012\n");