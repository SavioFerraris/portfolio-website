const modal = document.getElementById("privacy-modal");
const content = document.querySelector(".modal-content");

function openModal() {
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
    content.focus();
}

function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
}

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});


window.onload = function () {
    window.scrollTo(0, 0);
};
