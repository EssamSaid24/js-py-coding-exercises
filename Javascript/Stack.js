// Define a string to check for validity of parentheses.
let s = "()";

// Define a function to check if the given string has valid parentheses.
let isVaild = function(s){

    // Define a hashmap to store the corresponding closing parentheses for each opening parentheses.
    const hashMap = {"(":")", "{":"}", "[":"]"};

    // Define an empty stack to store the opening parentheses.
    const stack = [];

    // Iterate through each character of the string.
    for (let ch of s){

        // If the character is an opening parentheses, push its corresponding closing parentheses onto the stack.
        if(hashMap[ch]){
            stack.push(hashMap[ch]);
        }
        // If the character is a closing parentheses, pop the last opening parentheses from the stack if it matches the current closing parentheses.
        else if(stack.length > 0 && stack[stack.length-1] === ch){
            stack.pop();
        }
        // If the character is a closing parentheses but doesn't match the last opening parentheses in the stack, return false.
        else{
            return false;
        }
    }

    // Return true if the stack is empty, meaning all opening parentheses have been closed with the correct closing parentheses.
    return stack.length === 0;
}

// Call the function and log the result to the console.
console.log(isVaild(s));
