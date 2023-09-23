// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

var longestPalindrome = function(s) {
    const n = s.length;

    let minstart = 0, maxlen = 0;

    let i = 0;
    while (i < n) {
        if (n - i < maxlen / 2)
            break;

        let l = i, r = i;

        // Find the center of the palindrome
        while (r < n - 1 && s[r] === s[r + 1])
            r++;

        // Update the next starting point
        i = r + 1;

        // Expand around the center to find the longest palindrome
        while (l > 0 && r < n - 1 && s[l - 1] === s[r + 1]) {
            l--;
            r++;
        }

        const newlen = r - l + 1;
        if (newlen > maxlen) {
            maxlen = newlen;
            minstart = l;
        }
    }

    return s.substring(minstart, minstart + maxlen);
}