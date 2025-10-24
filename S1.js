
let nums =[3,2,2,3];
let val =3

function removeElement(nums, val) {
let x=0;
    for(let i=0;i<nums.length;i++)
    {
        if(val != nums[i])
        {
        nums[x] = nums[i];
       x=x+1;
        }
    }

    return x;
    
};

console.log(removeElement(nums, val))