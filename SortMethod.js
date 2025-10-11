let nums1= [1,2,3,];
let nums2 = [2, 5, 6];

// 1) Concat
let nums3 = nums1.concat(nums2);
console.log(nums3);

// 2)Spread
let nums4= [1,2,3,];
let nums5 = [2, 5, 6];

let nums6 = [...nums4,...nums5];
console.log(nums6);


// 3) 

let nums7= [1,2,3,];
let nums8 = [2, 5, 6];
let mergedUnique = [...new Set([...nums7, ...nums8])];
console.log(mergedUnique); // [1, 2, 3, 5, 6]

// A Set is a built-in JavaScript object that stores unique values only — it automatically removes duplicates.

let arr = [1, 2, 2, 3, 3, 4];
let uniqueSet = new Set(arr);
console.log(uniqueSet); // Set(4) { 1, 2, 3, 4 }


// But notice: Set is not an array. It’s a special object. If you want to convert it back into an array, use the spread operator (...) like this:
nums3.sort();
console.log(nums3);

console.log([10, 1, 5].sort());
// [ 1, 10, 5 ]
// The .sort() method in JavaScript, by default, converts elements to strings and sorts them lexicographically (alphabetically).
//  That causes issues when sorting numbers


// .sort((a, b) => a - b)
//  How it Works:
// The compare function takes two elements a and b.

// It returns:

// A negative number if a should come before b.

// 0 if a and b are equal.

// A positive number if a should come after b.

console.log([10, 1, 5].sort((a,b)=>b-a));

let arr2=[1,2 ,3,10];
let arr3 =arr2;
console.log(arr3); 
// This does not make a new copy of the array — it just makes arr3 another reference to the same array in memory.

// Best for Full Copy:
// Use .slice() or [...arr].

console.log(arr3.slice());