function twoSum(nums, target) {
    let myMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (myMap.has(complement)) {
        return [myMap.get(complement), i];
      }
      myMap.set(nums[i], i);
    }
    
    return null;
  }
  
  let nums = [2, 7, 11, 15];
  let target = 9;
  console.log(twoSum(nums, target));

//   Time Complexity is O(n).