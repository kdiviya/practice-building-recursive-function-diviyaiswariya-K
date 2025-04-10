function reverseString(inputStr){

    if (inputStr === "" || inputStr.length === 1){ // base case to avoid stack overflow.
        return inputStr; // return the input string if the your input length is 1 or empty.
    }

   return inputStr.charAt(inputStr.length-1) + reverseString(inputStr.slice(0,inputStr.length-1)); //The above "if" statement is not statisfied, recursive case is executed.
   //It chatAt() always extract the last character in the string. slice() starts at index 0 and ends at length-1 for each recursion call. 
   // Finally the extracted character is popped from the stack and concatenated with the result of charAt().
}

console.log(reverseString("hello")); // Outputs: "olleh"
console.log(reverseString("recursion")); // Outputs: "noisrucer"
console.log(reverseString("a")); // Outputs: "a"
console.log(reverseString("")); // Outputs: ""