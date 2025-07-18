/**
 * @param {number[]} nums
 * @return {number}
 */

// USING HASHMAP
var singleNumber = function(nums) {
    
    let hashMap ={};
    for(let i=0;i<nums.length;i++)
    {
        if(!hashMap[nums[i]])
        {
            hashMap[nums[i]] =1;
        }
        else{
            hashMap[nums[i]]++;
        }
    }


for(let i=0;i<nums.length;i++)
{
    if(hashMap[nums[i]] ===1)
    {
        return nums[i];
    }
}
};


// USING XOR
var singleNumber = function(nums) {
    
   let xor =0;
   for(let i=0;i<nums.length;i++)
   {
    xor = xor ^nums[i];
   }
   return xor;
};