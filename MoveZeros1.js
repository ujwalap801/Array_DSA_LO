let arr =[0, 2, 1, 9,0, 5];
let n =arr.length;

arr.sort((a,b)=>a-b);
for(let i=0;i<n/2;i++)
{
    let test = arr[i];
    arr[i] =arr[n-i-1];
    arr[n-i-1]= test;
}

console.log(arr);


// 2 SOLUTION
let arr2 = [0, 2, 1, 9, 0, 5];
let arr3 = new Array(arr2.length);
let j = 0;

// Add non-zero elements to arr3
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== 0) {
        arr3[j] = arr2[i];
        j++;
    }
}

// Fill remaining positions with 0
while (j < arr3.length) {  //j is 4
    arr3[j] = 0;
    j++;
}

console.log(arr3); // Output: [2, 1, 9, 5, 0, 0]


// 3 SOLUTION -------- FINAL WIHOUT CREATING AN ARRAY
let arr4 = [0, 2, 1, 9, 0, 5];
let p1=0
for(let i=0;i<arr4.length;i++)
{
 if(arr4[i] !=0)
 {
    arr4[p1] = arr4[i];
    p1++;
 }
}

while(p1<arr4.length)
{
    arr4[p1] =0;
    p1++;
}

// with For Loop

// for(let i=p1;i<arr4.length;i++)
// {
//     arr4[i] =0;
// }
console.log("new array", arr4);



