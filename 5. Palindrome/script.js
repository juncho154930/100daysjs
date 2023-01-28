"use strict";
// tsc script.ts
{
    const palindromeInput = document.querySelector("input[name='palindrome-input']");
    const submitBtn = document.querySelector(".submit");
    const result = document.querySelector(".result");
    submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", () => {
        let word = palindromeInput === null || palindromeInput === void 0 ? void 0 : palindromeInput.value.toUpperCase();
        let wordArr = word ? word.split("") : [];
        let wordArrLen = wordArr.length;
        let isPalindrome = wordArrLen > 0 ? true : false;
        // Time complexity: O(n)
        for (let i = 0; i < wordArrLen / 2; i++) {
            if (wordArr[i] !== wordArr[wordArrLen - i - 1]) {
                isPalindrome = false;
            }
        }
        // course example used substr on word to get the start and end->split.reverse.join then compare.
        // Time complexity: O(n);
        result ? result.innerHTML = word + (isPalindrome ? " is " : " is NOT ") + "a palindrome" : null;
    });
}
