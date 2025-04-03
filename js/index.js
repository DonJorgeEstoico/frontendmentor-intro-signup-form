function logSubmit(event) {
    event.preventDefault();

    let input = document.querySelectorAll(".input-area");
    let iconError = document.querySelectorAll(".icon-error");
    let spanError = document.querySelectorAll(".span-error");
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Validaciones simples
    if (firstName === "" || lastName === "" || email === "" || password === "") {
        input.forEach(element => {
            element.classList.add("invalid");
        });
        iconError.forEach(element => {
            element.classList.remove("hidden");
            element.classList.add("visible");
        });
        spanError.forEach(element => {
            element.classList.remove("hidden");
            element.classList.add("visible");
        });
    } else {
        input.forEach(element => {
            element.classList.remove("invalid");
        });
        iconError.forEach(element => {
            element.classList.remove("visible");
            element.classList.add("hidden");
        });
        spanError.forEach(element => {
            element.classList.remove("visible");
            element.classList.add("hidden");
        });
    }

    // Puedes limpiar los campos después de enviar
    document.getElementById("signup-form").reset();
}

const form = document.getElementById("signup-form");
form.addEventListener("submit", logSubmit);