/**
 * @param {number[]} digits
 * @return {number[]}
 */

// MY APPROACH
var plusOne = function(digits) {
    let n = digits.length;
    let newArray = [];

    for (let i = 0; i <= n - 2; i++) {
        newArray.push(digits[i]);
    }

    let lastDigit = digits[n - 1];
    let sum = lastDigit + 1;

    if (sum < 10) {
        newArray.push(sum); 
        return newArray;
    } else {
    
        digits[n - 1] = 0;

   
        for (let i = n - 2; i >= 0; i--) {
            if (digits[i] === 9) {
                digits[i] = 0;
            } else {
                digits[i] += 1;
                return digits;
            }
        }

     
        digits.unshift(1);
        return digits;
    }
};


// DIRECT SOLUTION
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }

        // If digit is 9, set to 0 and continue loop to handle carry
        digits[i] = 0;
    }

    // If we exited the loop, all digits were 9 (e.g. [9, 9, 9])
    // So we need to add a new digit at the beginning
    digits.unshift(1);
    return digits;
}
