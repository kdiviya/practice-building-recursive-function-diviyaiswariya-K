function reverseString(inputStr){

    if (inputStr === "" || inputStr.length === 1){
        return inputStr;
    }

   return inputStr.charAt(inputStr.length-1) + reverseString(inputStr.slice(0,inputStr.length-1));
}

console.log(reverseString("hello")); // Outputs: "olleh"
console.log(reverseString("recursion")); // Outputs: "noisrucer"
console.log(reverseString("a")); // Outputs: "a"
console.log(reverseString("")); // Outputs: ""