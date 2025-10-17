let arr =[1, 2, 3, 4, 5];



// BRUTEFORCE
function printSubArray(arr)
{
  let n= arr.length;
  let maxSum =0;
  for(let start =0;start<n;start++)
  {
    let currs =0;
    for(let end =start; end<n;end++)
    {
      currs += arr[end];
      maxSum= Math.max(currs, maxSum);
    }
  }

  return maxSum;
}

console.log(printSubArray(arr))


// Kadane's Algorithm

let n = nums.length;
    let maxSum = -Infinity;
    let currSum =0;
    for(let i=0;i< n;i++)
    {
        currSum += nums[i];
        maxSum = Math.max(currSum, maxSum);
        if(currSum <0)
        {
            currSum =0;
        }

    }

    return maxSum;

function printSubArray(arr)
{
  let n= arr.length;
  for(let i =0;i<n;i++)
  {
    for(let j=i ;j<n;j++)
    {
      for(let start = i; start<=j;start++)
      {
        // console.log(arr[start]+" ")
           process.stdout.write(arr[start] + " ");
      }
      console.log()
    }
  }
}

printSubArray(arr)