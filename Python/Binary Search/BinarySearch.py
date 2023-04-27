nums = [1, 3, 6, 9, 10, 15]
target = 15

def sol(nums, target):
    left = 0
    right = len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        print("this is mid", mid)
        print(nums[mid])
        if target == nums[mid]:
            return mid
        elif target > nums[mid]:
            left = mid + 1
        else:
            right = mid - 1
    return -1

print(sol(nums, target))