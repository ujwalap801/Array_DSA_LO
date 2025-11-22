let nums1= [1, 2, 3, 4, 5];
function arr(nums)
{
    
    let temp = nums[0];
    for(let i=1;i<nums.length;i++)
    {
        nums[i-1] = nums[i];
    }
    
    nums[nums.length-1] = temp;
    
    return nums;
}

console.log(arr(nums)); //tc:0(n) s.c-0(1)


// Rotate Left by D times
let nums = [1, 2, 3, 4, 5];
let d= 3;
function arr(nums, d)
{
    
    let temp = [];
    for(let i=0;i<d;i++)
    {
       temp.push(nums[i]);
    }
    
    for(let i=d;i<nums.length;i++)
    {
        nums[i-d] = nums[i];
    }
    
    for(let i=nums.length-d;i<nums.length;i++)
    {
        nums[i] = temp[i-(nums.length-d)];
    }
    
    return nums;
}

console.log(arr(nums, d)); //tc:0(n) s.c-0(1)


// Optimisex
class Solution {
    rotateArray(nums, k) {
k = k % nums.length;


   this.reverse(nums, 0, k - 1);
       this.reverse(nums, k, nums.length - 1);
    this.reverse(nums, 0, nums.length - 1);
 

    }



reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}}
