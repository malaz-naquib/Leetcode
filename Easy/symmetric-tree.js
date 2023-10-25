// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false
 
// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Recursive Solution
var isSymmetric = function(root) {
    let res = true;

    function helper(node1, node2) {
        if (!node1 && !node2) {
            return;
        }
        if (!node1 || !node2 || node1.val !== node2.val) {
            res = false;
            return;
        }

        helper(node1.left, node2.right)
        helper(node1.right, node2.left)
    }

    helper(root, root)

    return res;
};

// Time Complexity = O(N)
// Space Complexity = O(N)