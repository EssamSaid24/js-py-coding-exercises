s = "anagram"
t = "nagaram"
sorted_string = ''.join(sorted(s))
sorted_string_2 = ''.join(sorted(t))
if sorted_string == sorted_string_2:
    print("True")
else:
    print("False")