// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

var canConstruct = function(ransomNote, magazine) {
    // Iterate over every char in magazine
    for (const char of magazine) {
        // If the char of magazine is found in ransomNote, replace char with an empty string, removing that char from ransomNote
        ransomNote = ransomNote.replace(char, '');
    }

    // Check if ransomNote is empty. If so, that means ransomNote can be constructed using chars from magazine. Otherwise, false.
    return !ransomNote;
};