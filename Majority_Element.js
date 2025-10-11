//  What the Boyer-Moore Voting Algorithm Says
// The algorithm guarantees to find the majority element — the one that appears more than ⌊n / 2⌋ times — in O(n) time and O(1) space, assuming such an element always exists.

function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }

    return candidate;
}