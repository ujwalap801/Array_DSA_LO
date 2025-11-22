class Solution {
    isSorted(nums) {
        //your code goes here

        for(let i=0;i<nums.length-1;i++)
        {
            if(nums[i] > nums[i+1])
            {
                return false;
            }

            
        }

        return true;
    }
}