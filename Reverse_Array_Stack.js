let  arr =['h', 'e','l','l','o'];

function reverseArray(arr)
{
    let stack =[];

    for(let i=0;i<arr.length;i++)
    {
        stack.push(arr[i]);
    }

   let res=[];
   while(stack.length)
   {
    res.push(stack.pop());
   }

   return res;
}


console.log(reverseArray(arr))