// Define a constructor function for a linked list node
function ListNode(value) {
    this.val = value;  // Store the value in the node
    this.next = null;  // Initialize the next reference to null
}

// Create instances of linked list nodes
const node1 = new ListNode(1);
const node2 = new ListNode(2);

// Connect the nodes to form a linked list
node1.next = node2;

