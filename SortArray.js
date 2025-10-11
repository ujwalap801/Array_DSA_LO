function sortAndConcat(arr) {
    // Sort numerically (not lexicographically)
    arr.sort((a, b) => a - b);
    // Join the array into a single string
    return arr.join('');
}

// Example usage:
const numbers = [1, 2, 35, 4, 8, 3];
console.log(sortAndConcat(numbers)); // Output: "1234835"
