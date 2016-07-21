function main(input) {
	var inputarr = input.split("\n");
	var n = inputarr[0];
	var chatmsg = "";
	var multiplier = 1;
	var dates = [], datesarr, dateWeights, date19s = 0, date20s = 0, othermax = 0, maxValue = 0;
	
	for(var i = 1; i <= n; i++){
		chatmsg = inputarr[i];
		
		if(chatmsg.substr(0,1) === "G")
			multiplier = 2;
		else
			multiplier = 1;
			
		datesarr = chatmsg.match(/\b([1-9]|[12][0-9]|3[01])\b/g) || [];		
		
		for(var j = 0; j < datesarr.length; j++){
			if(datesarr[j] === "19")
				date19s += multiplier;
			else if(datesarr[j] === "20")
				date20s += multiplier;
			else{
				dates[datesarr[j]] = (dates[datesarr[j]] || 0) + multiplier;
				if(othermax < dates[datesarr[j]])
					othermax = dates[datesarr[j]];
			}
		}		
	}
	
	maxValue = Math.max(date19s, date20s);
	
	if(maxValue > othermax && date19s !== date20s)
		console.log("Date");
	else
		console.log("No Date");    
}

main("4\nG: I want to go on 19\nM: No that is not possible lets go on 21\nG: No 19 is final and 21 is not\nM: OKAY as you wish");