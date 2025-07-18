let arr =[1, 1, 0, 1,1,1];

// MY APPROACH
function zeroCount()
{
let currentCount=0;
let MaxCount=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i] === 1)
    {
        currentCount++;
    }

    if(MaxCount <currentCount)
    {
        MaxCount = currentCount;
    }
   
    if(arr[i]===0)
    {
        currentCount =0;
    }
      

}

return MaxCount;
}

console.log(zeroCount());


// CORRECT SOLUTION
function CountOne()
{
let currentCount=0;
let MaxCount=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i] === 1)
    {
        currentCount++;
    }
    else{
        MaxCount= Math.max(MaxCount, currentCount);
        currentCount=0;
    }


}

// return MaxCount;//it mistakes we have to compare the maxcount, currentcount
return Math.max(MaxCount, currentCount);

}

console.log(CountOne());

