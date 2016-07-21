function processData(input) {
    //Enter your code here
    var inputarr = input.split(" ");
    var n = parseInt(inputarr[2]);
    var aarr = [parseInt(inputarr[0])];
    var barr = [parseInt(inputarr[1])];
    var i = 2;
    var temp = 0;
		
    while(i < n){	
		temp = barr;
        barr = add(pow2(barr), aarr);
        aarr = temp;
        i++;
    }
    
    console.log(barr.join(""));
} 

function pow2(ar){
	var n = ar.length;
	var carry = 0;
	var resarr = [];
	var temparr = [];
	var res = 0;
	var tempobj = {};
	
	for(var j = n-1; j >= 0; j--){
		res = 0;
		carry = 0;
		temparr = [];
		if(!tempobj[ar[j]]){
			for(var i = n-1; i >= 0; i--){
				res = ar[j] * ar[i] + carry;
				carry = parseInt(res / 10);		
				temparr[i] = res % 10;
				if(i == 0 && carry > 0){
					temparr.unshift(carry);
				}
			}
		
			tempobj[ar[j]] = temparr.slice(0);
		}else{
			temparr = tempobj[ar[j]].slice(0);
		}
		if(j === n-1){
			resarr = temparr;
		}else{
			var k = n-1;
			while(k > j){
				temparr.push(0);
				k--;
			}	
			resarr = add(resarr, temparr);
		}
	}
	
	return resarr;
}

function add(ar1, ar2){
	var n1 = ar1.length;
	var n2 = ar2.length
	var carry = 0;
	var res = 0;	
	if(n2 > n1)
		return add(ar2, ar1);
	
	for(var i = 0; i < n1; i++){
		res = (ar2[n2-i-1] || 0) + ar1[n1-i-1] + carry;
		carry = parseInt(res / 10);		
		ar1[n1-i-1] = res % 10;
		if(i === n1-1 && carry > 0){
			ar1.unshift(carry);
		}
	}
	
	return ar1;
}


/*function multiply(a, b) {
    var n = a.toString().length > b.toString().length ? a.toString().length : b.toString().length;
    if(n == 1) {
        return parseInt(a) * parseInt(b);
    } else {
    	var n2 = Math.ceil(n/2);
        var aR = parseInt(a.toString().substr(n2));
        var aL = parseInt(a.toString().substr(0, n2));
        var bR = parseInt(b.toString().substr(n2));
        var bL = parseInt(b.toString().substr(0, n2));
        var x1 = multiply(aL, bL);
        var x2 = multiply(aR, bR);
        var x3 = multiply(aL + bL, aR + bR);
        return x1 * Math.pow(10, n) + (x3 - x1 - x2) * Math.pow(10, n / 2) + x2;
    }
}*/


startTimer();
//console.log(add([1,2], [1, 2, 4]));
//console.log(add([1,2], [1, 2]));
//console.log(add([7,2,9], [5]))
//console.log(pow2([1,1]));
//console.log(pow2([1,0]));
//console.log(pow2([1,2]));
//console.log(pow2([1,5]));
//console.log(pow2([2]));
//console.log(pow2([3]));
//console.log(pow2([100]));
processData("0 1 20");
//processData("2 2 20");
//console.log(pow2([5,3,8,7,8,3]));
endTimer();
show_profile_info();