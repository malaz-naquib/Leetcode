// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 
// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

var merge = function(intervals) {
    const start = 0;
    const end = 1;

    intervals = intervals.sort((a, b) => a[start] - b[start]);

    let previous = intervals[0]
    let res = [previous];

    for (let current of intervals) {
        if (current[start] <= previous[end]) {
            previous[end] = Math.max(previous[end], current[end])
        } else {
            res.push(current);
            previous = current;
        }
    }

    return res;
};