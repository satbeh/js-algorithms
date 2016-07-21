function main(input) {
    //Enter your code here
    var inputarr = input.split("\n");
    var h = parseInt(inputarr[0]);
    var a = inputarr[1].split(" ").sort(function(a,b){return a-b;});
    var t = parseInt(inputarr[2]);
    
    for(var j = 3; j < t+3; j++){
    	console.log(binary_search(a, parseInt(inputarr[j]), 0, h-1));
    }
}

function binary_search(a, val, low, high){	
	if(low === high){
		if(val === parseInt(a[low]))
			return low+1;
		else
			return 0;
	}
	
	var mid = Math.floor((low+high) / 2);
	if(val < parseInt(a[mid])){
		return binary_search(a, val, low, mid);
	}else if(val > parseInt(a[mid])){
		return binary_search(a, val, mid+1, high);
	}else{
		return mid+1;
	}
}
main("5\n1 2 3 4 5\n7\n0\n1\n2\n3\n4\n5\n6\n");
main("100\n100 99 98 97 96 95 94 93 92 91 90 89 88 87 86 85 84 83 82 81 80 79 78 77 76 75 74 73 72 71 70 69 68 67 66 65 64 63 62 61 60 59 58 57 56 55 54 53 52 51 50 49 48 47 46 45 44 43 42 41 40 39 38 37 36 35 34 33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1\n20\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20");