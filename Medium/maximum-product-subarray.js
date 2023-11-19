// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

var maxProduct = function(nums) {
    let maxTillIndex = [nums[0]];
    let minTillIndex = [nums[0]];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);
        max = Math.max(max, maxTillIndex[i])
    }

    return max;
};

// Time Complexity: O(n)
// Space Complexity: O(n) We created two DP Arrays, each the same length as our input