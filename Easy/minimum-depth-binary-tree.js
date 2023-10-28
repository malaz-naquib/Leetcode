// Given a binary tree, determine if it is 
// height-balanced
// .

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 
// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

var minDepth = function(root) {

    if (!root) {
        return 0;
    }

    let queue = [];
    let minDepth = 0;

    queue.push(root);

    while (queue.length > 0) {
        minDepth += 1;
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();

            if (!currentNode.left && !currentNode.right) {
                return minDepth;
            } else {
                currentNode.left && queue.push(currentNode.left);
                currentNode.right && queue.push(currentNode.right);
            }
        }
    }
};