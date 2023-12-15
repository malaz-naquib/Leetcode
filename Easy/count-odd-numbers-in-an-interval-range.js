// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].
 
// Constraints:

// 0 <= low <= high <= 10^9

var countOdds = function(low, high) {
    // Get length of interval range
    let length = high - low + 1;

    // Divide our length by 2, rounding down
    let count = Math.floor(length / 2);

    // Check if length and low is odd. If so, increase count by 1
    if (length % 2 && low % 2) {
        count++;
    }

    return count;
};

// Time Complexity: O(1)
// Space Complexity: O(1)