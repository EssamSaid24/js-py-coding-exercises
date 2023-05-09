// raceacar 
// racaevar


var isPalindrome = function(s) {
    let s_new = s.split("").join()
    s_new = s_new.toLowerCase()
    let s_final = []
    for(let i of s_new){
        i = i.charCodeAt(0)
        if((i >= 97 && i <= 122)){
            s_final.push(String.fromCharCode(i));
        }
    }
    let s_sort_reverse = s_final.slice().reverse();

    if(s_final.join('') === s_sort_reverse.join('')){
        return true;
    }
    return false;
};

console.log(isPalindrome("race a car")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello world")); // false


console.log(isPalindrome(s))
// function isAlphabetic(char) {
//   var code = char.charCodeAt(0);
//   return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
// }