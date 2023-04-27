nums = [1,2,3,4,6]
vaild = 0
nums.sort()
if nums[0] != 0:
    print(0)
for i in range(0,len(nums)-1):
    if nums[i+1] - nums[i] != 1:
        print(nums[i]+1)
        vaild += 1
if vaild == 0:
    print(nums[-1]+1)
    
