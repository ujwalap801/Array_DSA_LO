let nums1 = [1, 2, 3, 4, 5];
let nums2 = [1, 2, 7];

// Output: [1, 2, 3, 4, 5, 7]

function Union(nums1, nums2)
{
    let set = new Set();
    
    for(let i=0;i<nums1.length;i++)
    {
        set.add(nums1[i])
    }
    
    
    for(let i=0;i<nums2.length;i++)
    {
        set.add(nums2[i])
    }
    
    return Array.from(set.values())
    
}

console.log(Union(nums1, nums2));


// optimized

function Union(nums1, nums2) {
    let u = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            if (u.length === 0 || u[u.length - 1] !== nums1[i]) {
                u.push(nums1[i]);
            }
            i++;
        } else if (nums1[i] > nums2[j]) {
            if (u.length === 0 || u[u.length - 1] !== nums2[j]) {
                u.push(nums2[j]);
            }
            j++;
        } else { 
            // nums1[i] === nums2[j]
            if (u.length === 0 || u[u.length - 1] !== nums1[i]) {
                u.push(nums1[i]);
            }
            i++;
            j++;
        }
    }

    while (i < nums1.length) {
        if (u.length === 0 || u[u.length - 1] !== nums1[i]) {
            u.push(nums1[i]);
        }
        i++;
    }

    while (j < nums2.length) {
        if (u.length === 0 || u[u.length - 1] !== nums2[j]) {
            u.push(nums2[j]);
        }
        j++;
    }

    return u;
}

let nums1 = [1, 2, 3, 4, 5];
let nums2 = [1, 2, 7];

console.log(Union(nums1, nums2));  // [1, 2, 3, 4, 5, 7]
