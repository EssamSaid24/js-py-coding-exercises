class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

// Helper function to convert an array to a linked list
function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function listToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

const list1 = arrayToList([1, 3, 4]);
const list2 = arrayToList([0, 2, 6]);

const mergedList = mergeTwoLists(list1, list2);
const resultArray = listToArray(mergedList);

console.log(resultArray); // Output: [0, 1, 2, 3, 4, 6]
