nums = [1,2,3,4]
nums.sort()
summ = 0
for i in range(0,len(nums),2):
    summ += nums[i]
# return sum
print(summ)