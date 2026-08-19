// MOBILE MENU

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}


// FAQ

function faq(button) {

    const item = button.parentElement;

    item.classList.toggle("active");

    const symbol = button.querySelector("span");

    if (item.classList.contains("active")) {
        symbol.textContent = "−";
    } else {
        symbol.textContent = "+";
    }
}


// BOOKING FORM

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            "Thank you " +
            name +
            "! Your quote request has been received."
        );

        this.reset();
    });


// CHAT

function openChat() {

    const chat = document.getElementById("chatBox");

    if (chat.style.display === "block") {
        chat.style.display = "none";
    } else {
        chat.style.display = "block";
    }
}


function chatAnswer(type) {

    const answer = document.getElementById("chatAnswer");

    if (type === "booking") {

        answer.innerHTML =
            "<p>Great! Please use our booking form to request a free quote.</p>";

    }

    if (type === "price") {

        answer.innerHTML =
            "<p>Prices depend on property size and cleaning type. Request a free quote for an exact price.</p>";

    }

    if (type === "area") {

        answer.innerHTML =
            "<p>We currently serve London and surrounding areas. Contact us to check your postcode.</p>";

    }
}