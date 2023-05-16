class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  let head = [1, 2, 3, 4, 5, 6];
  
  // Create a linked list from the input array
  let curr = null;
  for (let i = head.length - 1; i >= 0; i--) {
    curr = new ListNode(head[i], curr);
  }
  head = curr;
  
  // Reverse the linked list
  let prev = null;
  curr = head;
  while (curr != null) {
    let next = curr.next;
    console.log("next and curr.next is", next)
    curr.next = prev;
    console.log("prev and curr.next is", next)

    prev = curr;
    console.log("this is curr and prev",prev)
    curr = next;
    console.log("next and curr is", next)

  }
  
  // Print the reversed linked list
  let reversedList = prev;
  while (reversedList != null) {
    console.log(reversedList.val);
    reversedList = reversedList.next;
  }
  