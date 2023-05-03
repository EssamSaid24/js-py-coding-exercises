var containsDuplicate = function(nums) {
    nums.sort()
    for(let i = 0; i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            return true
        }
    }
    return false
};

console.log(containsDuplicate([9,2,3,9]))

// Time Complexity O(n log n), where n is the length of the input array nums.