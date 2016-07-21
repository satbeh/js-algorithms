function main(input) {
    //Enter your code here
    var inputarr = input.split("\n");
    var t = inputarr[0];
    var str = "";
    var slen = 0;
    var sjlen = 0;
    
    for(var i = 1; i <= t; i++){
    	str = inputarr[i];
    	sjlen = (str.match(/suvojit/ig) || []).length;    	
    	slen = (str.match(/suvo/ig) || []).length - sjlen;
    	console.log("SUVO = " + slen + ", SUVOJIT = " + sjlen);
    }
}

main("3\nSUVOJITSU\n651SUVOMN\n$$$$$SUVOSUVOJIT$$$$$");