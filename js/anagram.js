function main(input) {
    //Enter your code here
    var inputarr = input.split("\n");
    var str = inputarr[0];
    var arr = str.split("");
    var n = arr.length;
    var temp;
    
    for(var i = n-1; i >= 0; i--){
    	if(str.charCodeAt(i) > str.charCodeAt(i-1)){
    		temp = arr[i];
    		arr[i] = arr[i-1];
    		arr[i-1] = temp;
    		break;
    	}
    }
    console.log(arr.join(""));
}

main("cba");