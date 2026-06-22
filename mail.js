const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        status.textContent = "✅ Je bericht is verzonden!";
        form.reset();

        // 🔥 na 20 seconden tekst weg
        setTimeout(() => {
            status.textContent = "";
        }, 20000);

    } else {
        status.textContent = "❌ Oeps, er ging iets mis.";
    }
});