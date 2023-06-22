function search(array, target) {
    array.sort((a, b) => a - b);
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; 
}

let result = search([1, 2, 3, 4, 6, 7], 5);
console.log(result);

// Time complexity O(n log n)
