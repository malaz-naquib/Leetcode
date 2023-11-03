// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

// Recursive solution (Preorder)
var preorderTraversal = function(root) {
    if (!root) return [];
    const result = [];

    const preorder = (node) => {
        if (!node) return null;
        
        result.push(node.val);
        if (node.left) preorder(node.left);
        if (node.right) preorder(node.right);
    }

    preorder(root);
    return result;
};

// Space Complexity: O(n)
// Time Complexity: O(n)

// Explanation: Because we have to reutnr a result and we're creating a stack, our space is linear. Our time complexity is also linear because we have to traverse every single node. Whatever the size of the input, the time is going to be relative to that.

// Follow Up Iterative solution
var preorderTraversal = function(root) {
    if (!root) return [];

    const stack = [root];
    const result = [];
    
    while (stack.length) {
        let node = stack.pop();
    
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
};

// Bonus: To perform inorder or postorder traversal on our binary tree, simply call "result.push(node.val)" between or after our left and right node checks respectively! :)

// Recursive solution (Inorder)
var preorderTraversal = function(root) {
    if (!root) return [];
    const result = [];

    const preorder = (node) => {
        if (!node) return null;
        
        if (node.left) preorder(node.left);
        result.push(node.val);
        if (node.right) preorder(node.right);
    }

    preorder(root);
    return result;
};

// Recursive solution (Postorder)
var preorderTraversal = function(root) {
    if (!root) return [];
    const result = [];

    const preorder = (node) => {
        if (!node) return null;
        
        if (node.left) preorder(node.left);
        if (node.right) preorder(node.right);
        result.push(node.val);
    }

    preorder(root);
    return result;
};