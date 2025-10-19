let arr =['3', '6','1','2'];

function bubbleSort(arr, compare)
{
    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=0;j<arr.length-1-i;j++)
        {
            if(compare(arr[j], arr[j+1]) >0)
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
 
}


   bubbleSort(arr, (a,b)=>a>b ?1: a<b?-1:0)

   console.log(arr)


let arr1 = [10n, 2n,2n, 100n];
// arr1.sort((a, b) => (a > b ? -1 : 1)); // works for BigInt
arr1.sort((a,b) => a>b ?1 :-1)
console.log(arr1);
console.log(arr1.toString())



let strArr = arr.map(x => x.toString() + 'n');
console.log(strArr.toString());  // "2n,10n,100n"



var kthLargestNumber = function(nums, k) {
  // Convert each string to BigInt
  const newNum = nums.map(n => BigInt(n));

  // Sort descending
  newNum.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  // Return kth largest as string
  return newNum[k - 1].toString();
};
