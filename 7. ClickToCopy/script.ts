// tsc script.ts
const wordInput = <HTMLInputElement>document.querySelector("input[name=word-input]");
const copyBtn = document.querySelector("button.copy-btn");

copyBtn?.addEventListener("click", ()=>{
    wordInput.select();
    wordInput.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(wordInput.value);
    copyBtn.innerHTML = "Copied!!!"
    setTimeout(()=>{
        copyBtn.innerHTML = "Copy"
    },3000)
})