
// Get the booking form
const bookingForm = document.getElementById("bookingForm");

// Add submit event
bookingForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get values from input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    // Check whether all fields are filled
    if (name === "" || email === "" ||
        destination === "" || date === "") {

        alert("Please fill all the fields!");
    }

    else {

        // Display confirmation message
        document.getElementById("message").innerText =
            "Thank you " + name +
            "! Your trip to " + destination +
            " has been requested successfully.";

        // Clear the form
        bookingForm.reset();
    }

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