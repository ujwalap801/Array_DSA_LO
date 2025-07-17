let arr =[1, 2, 3, 4,5];

for(let  i=0;i<arr.length;i++)
{
    if(i %2 ===0)
    {
        arr[i] =1;
    }
    else{
        arr[i] =0
    }
}

console.log(arr);
// [ 1, 0, 1, 0, 1 ]