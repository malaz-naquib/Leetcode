// Given a binary tree, determine if it is 
// height-balanced

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

var isBalanced = function(root) {
  if (root == null) return true;
	if (Height(root) == -1) return false;

	return true;
}
var Height = function(root) {
	if (root == null) return 0;

	let leftHeight = Height(root.left);
	let rightHight = Height(root.right);

	if (leftHeight == -1 || rightHight == -1) return -1;
  if (Math.abs(leftHeight - rightHight) > 1) return -1;

	return Math.max(leftHeight, rightHight) + 1;
};