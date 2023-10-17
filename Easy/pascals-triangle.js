// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30

var generate = function(numRows) {
    var i = 0;
    var j = 0;
    // Create an array list to store the output result...
    var res = [];
    // For generating each row of the triangle...
    for (i = 0; i < numRows; i++) {
        res.push(Array(i + 1));       // Initialize the first row of the pascal triangle as {1}...
        for (j = 0; j <= i; j++) {
            // Primary...
            if (j === 0 || j === i) {
                res[i][j] = 1;
            }
            else {
                // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
    }
    return res;      // Return the output list of pascal values...
};