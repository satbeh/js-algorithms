function maxDifference(a) {
    var maxdif = -1;    
    var t = a.length;
    a = a.map(Number);
    var min = a[0];
    
    for(var i = 1; i < t; i++){
    	if(a[i] - min > maxdif){
    		maxdif = a[i] - min;
    	}
    	
    	if(a[i] < min){
    		min = a[i]
    	}
    }    
    return maxdif;
}

console.log(maxDifference([5, 6, 10, 2, 4, 8, 1, 0]));