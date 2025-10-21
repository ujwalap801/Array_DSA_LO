// Approach 1: Recursive (for understanding)


var isPowerOfTwo = function(n) {
    if (n === 1) return true;          // 2^0 = 1
    if (n < 1 || n % 2 !== 0) return false; // not divisible by 2 or negative
    return isPowerOfTwo(n / 2);        // recursive call
};

//  Approach 2: Iterative (loop)
var isPowerOfTwo = function(n) {
    if (n < 1) return false;
    while (n % 2 === 0) {
        n = n / 2;
    }
    return n === 1;
};

//  Approach 3: Without loops or recursion (Bitwise trick — best one)



var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};