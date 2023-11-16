// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// Brute Force Solution: O(n logn)
var intersection = function(nums1, nums2) {
    let sortedNums1 = nums1.sort((a , b) => a - b);
    let sortedNums2 = nums2.sort((a , b) => a - b);
    let result = [];
    let i = 0;
    let j = 0;
    
    while (i < sortedNums1.length && j < sortedNums2.length){
        if (sortedNums1[i] === sortedNums2[j]) {
            if (!result.includes(sortedNums1[i])) {
                result.push(sortedNums1[i]);
            } 
            i++;
            j++;
        } else if (sortedNums1[i] < sortedNums2[j]) {
            i++;
        } else {
            j++;
        } 
    }
    return result;
};

// HashMap Solution: O(n)
var intersection = function(nums1, nums2) {
    let map = new Map();
    for (let num of nums1) {
        if (!map.has(num)) {
            map.set(num, 1);
        }
    }

    return nums2.filter(n => {
        if (map.has(n)) {
            map.delete(n);
            return true;
        } else {
            return false;
        }
    });
};

// Set Solution: O(n)
var intersection = function(nums1, nums2) {
    let setNum1 = new Set(nums1);

    return [...new Set(nums2.filter(num => setNum1.has(num)))];
};