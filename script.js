
// Get the booking form
const bookingForm = document.getElementById("bookingForm");

// Add submit event
bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    if (!name || !email || !destination || !date) {
        alert("Please fill all fields!");
        return;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        alert("Please select a future date!");
        return;
    }

    document.getElementById("message").innerText =
        "Thank you " + name +
        "! Your trip to " + destination +
        " has been requested successfully.";

    bookingForm.reset();

});
const searchInput = document.getElementById("searchInput");

const destinationCards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    destinationCards.forEach(function(card) {

        const destinationName =
            card.querySelector("h3").innerText.toLowerCase();

        if (destinationName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerText = "Light Mode";
    } else {
        themeToggle.innerText = "Dark Mode";
    }
});