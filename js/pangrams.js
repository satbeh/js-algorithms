function processData(input) {
	var charcounts = {};
	var ascii;
	
	input = input.toLowerCase();
	for(var i = 0; i < input.length; i++){
		ascii = input.charCodeAt(i);
		if(ascii >= 97 && ascii <= 122){
			charcounts[ascii] = 1;
		}
	}
	
	if(Object.keys(charcounts).length < 26)
		console.log("not pangram");
	else
		console.log("pangram");
}

processData("We promptly judged antique ivory buckles for the next prize");
processData("We promptly judged antique ivory buckles for the prize");
