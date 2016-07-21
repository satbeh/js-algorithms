function processData(input) {
    //Enter your code here
    var inputarr = input.split("\n");
    var count1 = Number(inputarr[0]);
    var count2 = Number(inputarr[2]);
    var nums1 = inputarr[1].split(" ").sort(function(a,b){return a-b;});
    var nums2 = inputarr[3].split(" ").sort(function(a,b){return a-b;});
    var hash1 = {};
    var keys1 = [];
    var hash2 = {};    
    var keys2 = [];
    
    for(var i = 0; i < count1; i++){
        if(hash1[nums1[i]])
        	hash1[nums1[i]]++;
        else
        	hash1[nums1[i]] = 1;
    }
    keys1 = Object.keys(hash1);
    
    for(var i = 0; i < count2; i++){
        if(hash2[nums2[i]])
        	hash2[nums2[i]]++;
        else
        	hash2[nums2[i]] = 1;
    }
    keys2 = Object.keys(hash2);
    
    var keys = keys1.concat(keys2).sort(function(a,b){return a-b;});
    var res = "";
    for(var i = 0; i < keys.length-1; i++){
        if(keys[i] != keys[i+1]){
        	res += keys[i] + " ";
        } else {
        	if(hash1[keys[i]] != hash2[keys[i]])       	
        		res += keys[i] + " ";
        	i++;
        }
        	
    }
    console.log(res);
} 


processData("10\n" +
"203 204 205 206 207 208 203 204 205 206\n" +
"13\n" +
"203 204 204 205 206 207 205 208 203 206 205 206 204");