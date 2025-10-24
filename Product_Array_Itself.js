// BRUTE FORCE

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  const result = []; 

  for(let i=0;i<nums.length; i++)
  {
  let product = 1;
    for(let j=0; j<nums.length;j++)
    {
        if(i != j)
        {
            product *= nums[j];
        }
    }

   result.push(product);
  }

  return result;
};

// OPTIMIZED WITH 0(n) and 0(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  const result = new Array(nums.length).fill(1); 

let prefix =[];
for(let i=1; i<nums.length;i++)
{
    prefix[i] = prefix[i-1] * nums[i-1];
}

let suffix =[];
for(let i = nums.length-2; i>=0; i--)
{
    suffix[i] = suffix[i+1] * nums[i+1];
}


for(let i=0; i<prefix.length; i++)
{
 result[i] = prefix[i]* suffix[i];


}

  return result;
};



// With Optimize 0(n) and 0(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  const result = new Array(nums.length).fill(1); 

for(let i=1; i<nums.length;i++)
{
result[i] =result[i-1] * nums[i-1];
}

let suffix=1;
for(let i = nums.length-2; i>=0; i--)
{
  suffix *= nums[i+1];
  result[i] *= suffix

}


  return result;
};
