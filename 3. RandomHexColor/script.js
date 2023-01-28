const hex = document.querySelector(".hex");
const generateButton = document.querySelector(".generate");

generateButton.addEventListener("click", () => {
    const hexColor = "#" + Math.random().toString(16).substring(2,8);
    hex.innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor;
})