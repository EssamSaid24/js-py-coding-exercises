nums = [0,1,3,4,5,6]
n = len(nums)
sum_1 = ((n*(n+1))/2)
sum_2 = 0
for i in range (0, len(nums)):
    sum_2 += nums[i]
print(int(sum_1-sum_2))
