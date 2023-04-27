nums = [1, 2, 4, 1, 45, 45]
nums.sort()
def Solution():
    for i in range(0, len(nums)):
        if nums[i] == nums[i+1]:
            return True
            break
    return False
print(Solution())