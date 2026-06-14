document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navList = document.querySelector(".ul-nav");

    hamburger.addEventListener("click", () => {
        // Alleen tonen/verbergen en kruis maken
        hamburger.classList.toggle("active");
        navList.classList.toggle("active");
    });
});
