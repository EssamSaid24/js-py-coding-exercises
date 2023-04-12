nums = [3,35,6,65,1,3]
new_nums = sorted(set(nums), reverse=True)
if len(new_nums) > 3:
    print( new_nums[2])
elif len(new_nums) == 3:
    print (new_nums[-1])
else:
    print (new_nums[0])