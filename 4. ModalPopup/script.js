const btnModal = document.querySelector(".btn-modal");
const modalClose = document.querySelector(".btn-modal .close");
const modal = document.querySelector(".modal")

btnModal.addEventListener("click", () => {
    modal.classList.add("active");
})

modal.addEventListener("click", () => {
    modal.classList.remove("active");
})

modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
})