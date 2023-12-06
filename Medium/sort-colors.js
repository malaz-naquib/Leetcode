// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 
// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
 
// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

// Approach 1: Brute Force Checking
var sortColors = function(nums) {
    let one = 0;
    let zero = 0;
    let two = 0;

    // Step 1: Iterate through our input array and count each element.
    for (let elem of nums) {
        if (elem == 0) {
            zero++;
        } else if (elem == 1) {
            one++;
        } else {
            two++;
        }
    }

    // Step 2: Make the existing input array null in order to run our algorithm in place
    nums.length = 0;

    // Step 3: Print the number of 0's(reds), 1's(whites), and 2's(blues), pushing 0, 1, or 2 into our null input array everytime i is greater than the values of our one, zero, or two variables
    for (let i = 0; i < zero; i++) {
        nums.push(0);
    }
    for (let i = 0; i < one; i++) {
        nums.push(1);
    }
    for (let i = 0; i < two; i++) {
        nums.push(2);
    }
};

// Approach 1.2: Brute Force Checking with One Modification
var sortColors = function(nums) {
  let zero = 0;
  let one = 0;
  let two = 0;

  // Step 1: Iterate through our input array and count 0 and 1 ALONE, skipping counting 2
  for (let elem of nums) {
    if (elem == 0) {
      zero++;
    } else if (elem == 1) {
      one++;
    }
  }

  // Step 2: Two's count is goin to be our input array's length - our one's count - our zeroe's count
  two = (nums.length) - (zero) - (one);

  // Step 3: Make the existing input array null in order to run our algorithm in place
  nums.length = 0;

  // Step 4: Print the number of 0's(reds), 1's(whites), and 2's(blues), pushing 0, 1, or 2 into our null input array everytime i is greater than the values of our one, zero, or two variables
  for (let i = 0; i < zero; i++) {
    nums.push(0);
  }
  for (let i = 0; i < one; i++) {
    nums.push(1);
  }
  for (let i = 0; i < two; i++) {
    nums.push(2);
  }
};

// Approach 2: One Pass Algorithm
var sortColors = function(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] == 0) {
      swap(low, mid);
      mid++;
      low++;
    } else if (nums[mid] == 1) {
      mid++;
    } else if (nums[mid] == 2) {
      swap(mid, high);
      high--;
    }
  }

  function swap(a, b) {
    [nums[b], nums[a]] = [nums[a], nums[b]];
  }
  
};

// Approach 3: Intuitive Approach
var sortColors = function(nums) {
  let i = 0;
  
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++
    }
  }

  let k = i;
  for (let m = 0; m < nums.length; m++) {
    if (nums[m] == 1) {
      [nums[m], nums[k]] = [nums[k], nums[m]];
      k++;
    }
  }
};