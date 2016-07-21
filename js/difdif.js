function main(input) {
	var inputarr = input.split("\n");
	var str = inputarr[0];	
	var n = str.length;
	console.log(count(str, n, 1, 0)); 
}

function count(str, strlen, substrlen, total){
	if(substrlen > strlen)
		return total;
	
	var substrs = {};
	var substr = "";
	
	for(var i = 0; i <= strlen - substrlen; i++){
		substr = str.substr(i, substrlen);
		if(!substrs.hasOwnProperty(substr)){
			substrs[substr] = 1;
			total++;
		}
	}
		
	return count(str, strlen, substrlen+1, total);
}

main("abcabc");


