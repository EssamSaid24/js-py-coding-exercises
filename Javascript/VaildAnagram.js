let s = "anagram"
let t = "nagaram"

var isAnagram = function(s, t) {
    let s_sort = s.split("").sort().join()
    let t_sort = t.split("").sort().join()
    if(s_sort === t_sort){
        return true
    }
    return false
 };
 console.log(isAnagram(s,t))

//   Time Complexity is O(n log n) >>>> n is the length of the input string s