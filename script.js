function initModal() {
    const modal = document.getElementById("privacy-modal");
    const content = document.querySelector(".modal-content");

    window.openModal = function() {
        modal.style.display = "flex";
        document.body.classList.add("modal-open");
        content.focus();
    }

    window.closeModal = function() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}