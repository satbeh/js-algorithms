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
	var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var t = parseInt(n_temp[1]);
    width = readLine().split(' ');
    width = width.map(Number);
    for(var a0 = 0; a0 < t; a0++){
        var i_temp = readLine().split(' ');
        var i = parseInt(i_temp[0]);
        var j = parseInt(i_temp[1]);
        var min = width[i];
        for(var k = i; k <= j; k++){
        	if(min > width[k])
        		min = width[k];
        }
        console.log(min);
    }
}

/*processData("8 5\n" + 
		"2 3 1 2 3 2 3 3\n" + 
		"0 3\n" + 
		"4 6\n" + 
		"6 7\n" + 
		"3 5\n" + 
		"0 7");*/

processData("5 5\n" + 
		"1 2 2 2 1\n" + 
		"2 3\n" + 
		"1 4\n" + 
		"2 4\n" + 
		"2 4\n" + 
		"2 3");
