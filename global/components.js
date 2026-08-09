fetch("../component/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });

fetch("../component/footer.html")
    .then(response => response.text())
    .then(data => {
        footer.innerHTML = data;
    });