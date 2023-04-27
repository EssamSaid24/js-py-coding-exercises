nums = [1,0,1]
nums.sort()
vaild = 0
# 1 1 2 2 4
if len(nums) == 1:
    print(nums[0])
else:
    for i in range(0, len(nums)-1, 2):
        # print(nums[i])
        if nums[i] == nums[i+1]:
            continue
        else:
            print(nums[i])
            vaild +=1
            break
        # print(nums[-1])
if vaild == 0:
    print(nums[-1])