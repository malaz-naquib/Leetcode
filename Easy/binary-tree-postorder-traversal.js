// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
 
// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 
// Follow up: Recursive solution is trivial, could you do it iteratively?

// Recursive Solution
// Time Complexity: O(n)
// Space Complexity: O(n)
var postorderTraversal = function(root) {
    let res = [];
    traverse(root);
    return res;
    
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        res.push(node.val);
    }
};

// Iterative Solution
// Time Complexity: O(n)
// Space Complexity: O(n)
var postorderTraversal = function(root) {
    if (!root) return [];
    let stack = [], res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack[stack.length-1];
        if (node.left) {
            stack.push(node.left);
            node.left = null;
        }
        else if (node.right) {
            stack.push(node.right);
            node.right = null;
        }
        else res.push(stack.pop().val);
    }
    return res;
};