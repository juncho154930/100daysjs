"use strict";
// tsc script.ts
{
    const wordInput = document.querySelector("input[name='word-input']");
    const submitBtn = document.querySelector(".submit");
    const result = document.querySelector(".result");
    submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", () => {
        const word = wordInput === null || wordInput === void 0 ? void 0 : wordInput.value;
        const wordArr = word.split("");
        let count = 0;
        let count2 = 0;
        const vowels = {
            'a': true,
            'e': true,
            'i': true,
            'o': true,
            'u': true
        };
        const vowels2 = ['a', 'e', 'i', 'o', 'u'];
        // "fast"
        let t1 = performance.now();
        wordArr.forEach((char) => {
            if (vowels[char])
                count++;
        });
        let t2 = performance.now();
        // "slow"
        let t3 = performance.now();
        wordArr.forEach((char) => {
            vowels2.forEach((v) => {
                if (v === char)
                    count2++;
            });
        });
        let t4 = performance.now();
        console.log("performance21fast: " + (t2 - t1));
        console.log("performance43slow: " + (t4 - t3));
        result ? result.innerHTML = "count1: " + count.toString() + "<br /> count2: " + count2.toString() : "";
    });
}
