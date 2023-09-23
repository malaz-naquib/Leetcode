// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */

// DOUBLE LOOP SOLUTION
var lengthOfLongestSubstring = function (s) {
    // New variable to store our longest string
    let longestStringLength = 0;

    // Loop through our string
    for (let i = 0; i < s.length; i++) {
        // Declare variable inside loop to store the string created from the current position
        let currentStringSet = new Set();

        // Loop through chars from current position
        for (let x = i; x < s.length; x++) {
            // Conditional to check if current char exists in current Set
            if (currentStringSet.has(s[x])) {
                // If true, continue loop without adding current, pre-existing char
                break;
            } else {
                // If char is not found, add to the Set
                currentStringSet.add(s[x]);
            }
        }

        // Assign the longest string size to our longestStringLength variable
        longestStringLength = Math.max(longestStringLength, currentStringSet.size);
    }
    return longestStringLength;
};

// OPTIMIZED ARRAY SOLUTION

var lengthOfLongestSubstring = function (s) {
    // Decalre two new variables. One empty array to store the running characters, another to store longest string length var
    let currentString = [];
    let longestStringLength = 0;
    
    // Loop through our provided string
    for (let i = 0; i < s.length; i++) {
        // Grab current character's index position in current string
        const currentCharacterPosition = currentString.indexOf(s[i]);

        // Conditional if current character exists in current string
        if (currentCharacterPosition !== -1) {
            // Cut the array off after the occurence of the character that meets the conditional
            currentString.splice(0, currentCharacterPosition + 1);
        }

        // Add the current character to the array
        currentString.push(s[i]);

        // Assign current string length if bigger than the existing record
        longestStringLength = Math.max(longestStringLength, currentString.length);
    }
    
    return longestStringLength;
};