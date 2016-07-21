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
		var rem3 = n % 3;
		var res3 = parseInt(n / 3);
		var num = getNum("-1", res3, rem3);
		console.log(num);
	}
}

function getNum(num, count3, count5) {
	if ((count5 % 5) == 0) {
		if (num == "-1")
			num = "";

		for (var k = 0; k < 3 * count3; k++)
			num += "5";
		for (var l = 0; l < count5; l++)
			num += "3";

		return num;
	} else {
		if (count3 < 1)
			return num;
		else
			return getNum(num, count3 - 1, count5 + 3);
	}
}

processData("11\n" + "1\n" + "2\n" + "3\n" + "4\n" + "5\n" + "6\n" + "7\n"
		+ "8\n" + "9\n" + "10\n" + "35");

/*
console.log("===");			
processData("1\n" +						
			"100000");*/

