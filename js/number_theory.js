/*
 * 	ALGORITHM : 
 * 	GCD of 2 numbers
 *  ----------------
 * 	Time Complexity : O(min(A,B))
 */
function gcd(A, B) {
	var m = Math.min(A, B), gcd;
	for (var i = m; i > 0; --i)
		if (A % i == 0 && B % i == 0) {
			gcd = i;
			return gcd;
		}
}

/*
 * 	ALGORITHM : 
 * 	Euclid's GCD of 2 numbers
 *  ----------------
 * 	Time Complexity : O(log(max(A,B)))
 */
function euclid_gcd(A, B) {
	if (B == 0)
		return A;
	else
		return euclid_gcd(B, A % B);
}

/*
 * 	ALGORITHM : 
 * 	Extended Euclid's GCD of 2 numbers
 *  ----------------
 *  NOTES:
 *  This is the extended form of Euclid’s Algorithm explained above. Ax + By = GCD(A, B).
 *  ----------------
 * 	Time Complexity : O(log(max(A,B)))
 */
function extended_euclid_gcd(A, B) {
	var d, x, y;
	calculate_gcd(A, B);
	return {
		d : d,
		x : x,
		y : y
	};

	function calculate_gcd(A, B) {
		if (B == 0) {
			d = A;
			x = 1;
			y = 0;
		} else {
			calculate_gcd(B, A % B);
			var temp = x;
			x = y;
			y = temp - (A / B) * y;
		}

		if (B == 0)
			return A;
		else
			return calculate_gcd(B, A % B);
	}

}

/*
 * 	ALGORITHM : 
 * 	Calculate (a^b) % c
 *  ----------------
 *  NOTES:
 *  Taking b as 45, binary value is {101101} base 2
 *  a^b= a^({101101} base 2) 
 *  
 *  Now b can be evaluated as
 *  b = 1 * 2^5 + 0 * 2^4 + 1 * 2^3 + 1 * 2^2 + 0 * 2^1 + 1 * 2^0 
 *  
 *  Next a^b can be evaluated as(for the values 0 we would ignore the multiplication)
 *  a^b = (1*(a^(2^5)) * (0*(a^(2^4)) * (1*(a^(2^3)) * (1*(a^(2^2)) * (0*(a^(2^1)) * (1*(a^(2^0)) 
 *  ----------------
 * 	Time Complexity 	: O(log(b))
 * 	Space Complexity 	: O(1)
 */
function modpowIter(a, b, c) {
	var ans = 1;
	while (b != 0) {
		if (b % 2 == 1)
			ans = (ans * a) % c;

		a = (a * a) % c;
		b = parseInt(b / 2);
	}
	return ans;
}

/*
 * 	ALGORITHM : 
 * 	Calculate (a^b) % c using recursion
 *  ----------------
 *  NOTES:
 * 	a^b = a^(2(b/2)) - If b is even, and b>0.
 *  a^b = (a) * a^(2(b-1/2)) - If b is odd.
 *  a^b = 1 - If b is 0.
 *  ----------------
 * 	Time Complexity 	: O(log(b))
 * 	Space Complexity 	: O(1)
 */
function modRecursion(a, b, c) {
	if (b == 0)
		return 1;
	if (b == 1)
		return a % c;
	else if (b % 2 == 0) {
		return modRecursion((a * a) % c, parseInt(b / 2), c);
	} else {
		return (a * modRecursion((a * a % c), parseInt(b / 2), c)) % c;
	}
}

function tests() {
	console.log(gcd(16, 10));
	console.log(gcd(60, 60));
	console.log(gcd(60, 59));
	return;

	console.log(euclid_gcd(16, 10));
	console.log(euclid_gcd(60, 60));
	console.log(euclid_gcd(60, 59));
	return;

	console.log(extended_euclid_gcd(16, 10).d);
	console.log(extended_euclid_gcd(60, 60).d);
	console.log(extended_euclid_gcd(60, 59).d);
	return;

	console.log(modpowIter(2, 5, 5));
	console.log(modpowIter(2, 5, 1000000007));
	return;

	console.log(modRecursion(2, 5, 5));
	console.log(modpowIter(2, 5, 1000000007));
	return;
}

tests();