function logSubmit(event) {
    event.preventDefault();

    let input = document.querySelectorAll(".input-area");
    let iconError = document.querySelectorAll(".icon-error");
    let spanError = document.querySelectorAll(".span-error");
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Simple validation
    if (firstName === "" || lastName === "" || email === "" || password === "") {
        // Adding and removing styles to certain elements
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

    // Resetting form style and values
    document.getElementById("signup-form").reset();
}

// Listener for form by submit operation
const form = document.getElementById("signup-form");
form.addEventListener("submit", logSubmit);