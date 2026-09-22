/*voor de header en footer*/

fetch("../component/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        initHamburger();
    });

fetch("../component/footer.html")
    .then(response => response.text())
    .then(data => {
        footer.innerHTML = data;
    });