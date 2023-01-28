const randomNumber = document.querySelector(".random-number")
const generateButton = document.querySelector(".generate")

generateButton.addEventListener("click", (e) => {
    randomNumber.innerHTML = Math.floor(Math.random() * 100)
})