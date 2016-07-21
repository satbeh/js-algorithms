function main(input) {
    var n = input.split("\n")[0];
    var arr = input.split("\n")[1].split(' ');
    arr = arr.map(Number).sort(function(a,b){return a-b;});
    cutStick(arr); 
}

function cutStick(arr){
    var len = arr.length;
    if(len === 0)
        return;
    else{
    	console.log(len);
        var val = arr[0], i = 0;
        
        while(arr[i] == val)
            arr.shift();
        
        return cutStick(arr);
    }
}

main("6\n5 4 4 2 2 8");
main("8\n1 2 3 4 3 3 2 1");