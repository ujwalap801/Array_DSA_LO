/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let n = nums.length;
    
    for(let k=0; k<n;k++)
    {
        let rotate =[];

        for(let i=0;i<n;i++)
        {
            rotate.push(nums[(i+k) % n]);
        }

        let isSorted = true;
        for(let j=0;j<n;j++)
        {
            if(rotate[j] < rotate[j-1])
            {
                isSorted = false;
                break;
            }
        }

        if(isSorted) return true;
    }

    return false;
};