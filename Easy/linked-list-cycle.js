// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

// Two-Pointer Method
var hasCycle = function(head) {
    // Initialize two pointers, both pointing to head
    let slowPoint = head;
    let fastPoint = head;
    // Traverse the linked list until the fastPoint or its next become null
    while (fastPoint !== null && fastPoint.next !== null) {
        // Update slowPoint
        slowPoint = slowPoint.next;
        // Update fastPoint
        fastPoint = fastPoint.next.next;
        // Check if slowPoint and fastPoint meet at some point
        if (slowPoint === fastPoint) {
            // If they do meet, the linked list has a cycle in it
            return true;
        }
    }
    // If slowPoint and fastPoint DO NOT meet, the linked list DOES NOT have a cycle in it
    return false;
};
// Time Complexity: O(n) - At worst, each node is visited once.
// Space Complexity: O(1) - Constant space is used.

// Optimized solution (Same Two-Pointer Method)
const hasCycle = (head) => {
    let fast = head;
    while (fast && fast.next) {
      head = head.next;
      fast = fast.next.next;
      if (head === fast) return true;
    }
    return false;
  };