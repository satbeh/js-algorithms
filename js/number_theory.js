function modpowIter(int a, int b, int c) {
        int ans=1;
        while(b != 0) {
                if(b%2 == 1)
                        ans=(ans*a)%c;

                a=(a*a)%c;
                b /= 2;
        }
        return ans;
}

function modRecursion(a, b, c){
	if (b == 0)
		return 1;
	if (b == 1)
		return a % c;
	else if (b % 2 == 0){
		return modRecursion((a * a) % c, parseInt(b / 2), c);
	} else{
		return (a * modRecursion((a * a % c), parseInt(b / 2), c)) % c;
	}
}

function tests(){
	console.log(modRecursion(2, 5, 5));
	console.log(modRecursion(2, 5, 1000000007));
}
tests();