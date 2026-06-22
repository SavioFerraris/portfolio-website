document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector(".nav-list");
    const hamburger = document.querySelector(".hamburger");

    function toggleMenu() {
        nav.classList.toggle("active");
    }

    // maak functie globaal zodat HTML onclick werkt
    window.toggleMenu = toggleMenu;

    document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            nav.classList.remove("active");
        }
    });

});