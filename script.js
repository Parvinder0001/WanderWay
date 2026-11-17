
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
