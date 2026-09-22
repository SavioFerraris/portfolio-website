function initHamburger() {

    const nav = document.querySelector(".nav-list");
    const hamburger = document.querySelector(".hamburger");

    if (!nav || !hamburger) return;

    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();

        nav.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (
            !nav.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {
            nav.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
}