// tsc script.ts
var wordInput = document.querySelector("input[name=word-input]");
var copyBtn = document.querySelector("button.copy-btn");
copyBtn === null || copyBtn === void 0 ? void 0 : copyBtn.addEventListener("click", function () {
    wordInput.select();
    wordInput.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(wordInput.value);
    copyBtn.innerHTML = "Copied!!!";
    setTimeout(function () {
        copyBtn.innerHTML = "Copy";
    }, 3000);
});
