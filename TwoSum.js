var twoSum = function(nums, target) {
    const map = new Map(); // stores value -> index

    console.log(map);
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
            console.log(map);
    }


    throw new Error("No solution");
};


const result = twoSum([2, 7, 11, 15], 9);
console.log(result);




function findTwoSum(arr, target) {
    const seen = new Set();
    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            return true; // Found a pair
        }
        seen.add(num);
    }
    return false;
}







let arr =[2, 7, 11, 15];

let target =9;

function sum(arr, target)
{

    let ans =[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1; j<arr.length;j++)
        {
            if(arr[i]+arr[j] ===target)
            {
                
                ans.push(i, j); // store the pair
                return ans;
            }
        }
    }


    return -1;
}



console.log(sum(arr,target));
