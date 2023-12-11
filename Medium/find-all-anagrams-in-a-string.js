// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

const arrayValuesEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
    return true;
}

var findAnagrams = function(s, p) {
    const sArr = new Array(26).fill(0);
    const pArr = new Array(26).fill(0);
    const result = [];

    for (let i = 0; i < p.length; i++) {
        let index = p.charCodeAt(i) % 26;
        pArr[index]++;
    }

    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) % 26;
        sArr[index]++;

        if (i > p.length - 1) {
            let headIdx = s.charCodeAt(i - p.length) % 26;
            sArr[headIdx]--;
        }

        if (i >= p.length - 1) {
            if (arrayValuesEqual(sArr, pArr)) {
                result.push(i - (p.length - 1));
            }
        }
    }
    
    return result; 
};