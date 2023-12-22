// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.

var commonChars = function(words) {
    let res = [...A[0]];
    for (let i = 1; i < A.length; i++) {
        res = res.filter(c => {
            const l = A[i].length;
            A[i] = A[i].replace(c, "");
            return l > A[i].length;
        });
    }
    return res;
};