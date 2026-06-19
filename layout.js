// ✅ HTML laden (header, footer, modal)
function loadHTML(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;

            // ✅ als er een callback is → uitvoeren NA laden
            if (callback) callback();
        })
        .catch(error => console.error("Fout bij laden:", error));
}


// ✅ MODAL INITIALISEREN (belangrijk!)
function initModal() {
    const modal = document.getElementById("privacy-modal");
    const content = document.querySelector(".modal-content");

    // Open modal
    window.openModal = function () {
        if (modal) {
            modal.style.display = "flex";
            document.body.classList.add("modal-open");

            if (content) content.focus();
        }
    }

    // Close modal
    window.closeModal = function () {
        if (modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    }

    // Klik buiten = sluiten
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}


// ✅ ALLES LADEN


const isSubPage = window.location.pathname.includes("projecten");

const basePath = isSubPage ? "../" : "";

loadHTML("header-container", basePath + "header/header.html");
loadHTML("footer-container", basePath + "footer/footer.html");
loadHTML("modal-container", basePath + "modal/modal.html", initModal);



// ✅ ALGEMENE CLICK EVENTS (open via class)
document.addEventListener("click", function (e) {

    // OPEN via privacy link
    if (e.target.closest(".privacy-link")) {
        e.preventDefault();
        openModal();
    }

    // CLOSE via X
    if (e.target.closest(".modal-close")) {
        closeModal();
    }

});