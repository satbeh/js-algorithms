function processData(input) {
    //Enter your code here
    var inputarr = input.split("\n");
    var nk = inputarr[0].split(" ");
    var n = nk[0];
    var k = nk[1];
    var nums = inputarr[1].split(" ").sort(function(a,b){return a-b;});
    var res = 0;
    var dif = 0;
    var i=0;
    var j=1;
       
    while(j < n) {
        dif = nums[j] - nums[i];        
        
        if (dif == k) {
            res++;
            j++;
        } else if (dif > k) {
            i++;
        } else if (dif < k) {
            j++;
        }        
    }    
    console.log(res);
} 

processData("5 2\n"+
			"1 5 3 4 2");