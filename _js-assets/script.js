// Store information about the coffee shop
let shopName = "The Daily Brew";
let yearFounded = 2020;
let isOpen = true;

// Display the variables in the console
console.log(shopName);
console.log(yearFounded);
console.log(isOpen);

// Find the element with the ID "welcome-message"
const welcomeMessage = document.getElementById("welcome-message");

// Check that the element exists before changing it
if (welcomeMessage) {
    welcomeMessage.innerHTML = "Welcome to " + shopName + "!";
}

function greetCustomer() {
    console.log("Welcome to The Daily Brew");
}

greetCustomer();

function greetByName(name) {
    console.log("Welcome, " + name + "!");
}

greetByName("Hiren");
greetByName("Sarah");
greetByName("John");


function calculateTotalPrice(price, quantity) {
    return price * quantity;
}

let total = calculateTotalPrice(35, 3);
console.log("Total Price: R" + total);

let shopIsOpen = false;

if (shopIsOpen === true) {
    console.log("The shop is open.");
} else {
    console.log("The shop is closed. Come back later.");
}

function checkAge(age) {
    if (age >= 18) {
        console.log("You can order coffee.");
    } else {
        console.log("You can order hot chocolate.");
    }
}

console.log(checkAge(20));
console.log(checkAge(16));

/*====================================================================*/
/* Dates                                                              */
/*====================================================================*/

function displayDate() {
    const dateElement = document.getElementById("date-display"); // Get the element with the ID "date-display"
    if (dateElement) {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // dateElement.innerHTML = "🗓️" + today.toLocaleDateString( en-ZA, options);
        dateElement.innerHTML = "🗓️" + today.toLocaleDateString('en-ZA', options); // converts to a readable format
    }
}

displayDate();

/*====================================================================*/
/* Year                                                               */
/*====================================================================*/

function displayYear() { // Function to display the current year in the footer
    const yearElement = document.getElementById("year");
    if (yearElement) {
        const today = new Date();
        yearElement.innerHTML = today.getFullYear();
    }
}

displayYear();

/*====================================================================*/
/* Loops recognition                                                  */
/*====================================================================*/

const menuItems = ["Espresso", "Cappuccino", "Latte", "Croissant", "Muffin"];

for (let i = 0; i < menuItems.length; i++) { // Loop through the menuItems array
    console.log("Menu Item: " + menuItems[i]);
}

/*====================================================================*/
/* JQUERY BASICS                                                      */
/*====================================================================*/

$(document).ready(function () { //wait until the page is fully loaded before running the code
    console.log("jQuery is ready!");
});

$("#greet-button").click(function () { //when the button is clicked, run the function
    $("#greet-output").text("Hello, welcome to The Daily Brew!"); //change the text of the element with the ID "greet-output"
});

/*====================================================================*/
/* Trying for a hovering effect                                       */
/*====================================================================*/

$("#greet-button").hover(function () { //when the button is hovered over, run the function
    $(this).css("background-color", "#d4a373"); //change the background color of the button
}, function () { //when the mouse leaves the button, run the function
    $(this).css("background-color", ""); //change the background color of the button back
});

$(document).ready(function() {// Wait until the document is fully loaded
    console.log("jQuery is loaded and ready!"); // Log a message to the console when the document is ready

    if ($("#greet-button").length) {// Check if the element with ID "greet-button" exists
        $("#greet-button").click(function() {// Add a click event listener to the button
            $("#greet-output").text("Welcome to The Daily Brew!");
        });

        $("#greet-button").hover(// Add a hover event listener to the button
            function() {
                $(this).css("background-color", "#d4a373");
            },
            function() {// When the mouse leaves the button, reset the background color
                $(this).css("background-color", "");
            }
        );
    }
});

/* ============================================================ */
/* LIGHTBOX GALLERY                                 */
/* ============================================================ */

    if ($("#lightbox").length) {// Check if the lightbox element exists
        // When a gallery image is clicked
        $(".gallery-img").click(function() {// Add a click event listener to the gallery images
            var imgSrc = $(this).attr("src");// Get the source of the clicked image
            $(".lightbox-image").attr("src", imgSrc);// Set the source of the lightbox image to the clicked image
            $("#lightbox").addClass("active");// Show the lightbox
        });

        // When the close button is clicked
        $(".lightbox-close").click(function() {// Add a click event listener to the close button
            $("#lightbox").removeClass("active");// Hide the lightbox
        });

        // When the background is clicked
        $("#lightbox").click(function(event) {// Add a click event listener to the lightbox background
            if (event.target === this) {// Check if the clicked target is the lightbox itself (not the image or close button)
                $("#lightbox").removeClass("active");// Hide the lightbox
            }
        });
    }



/* ============================================================ */
/*  FORM VALIDATION + ACKNOWLEDGEMENT                */
/* ============================================================ */

const contactForm = document.getElementById("contact-form");  // Get the contact form element by its ID

if (contactForm) {// Check if the contact form exists
    contactForm.addEventListener("submit", function(event) {// Add a submit event listener to the contact form
        event.preventDefault(); // Prevent the default form submission behavior
        // Get the values of the form fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const feedback = document.getElementById("form-feedback");

        if (name === "") {// Check if the name field is empty
            feedback.innerHTML = "❌ Please enter your name."; // Set the feedback message to indicate that the name is required
            feedback.style.color = "#e74c3c"; // Set the feedback message color to red
            return; // Exit the function early if the name field is empty
        }

        if (!email.includes("@") || !email.includes(".")) { // Check if the email field is valid (contains "@" and ".")
            feedback.innerHTML = "❌ Please enter a valid email address."; // Set the feedback message to indicate that the email is invalid
            feedback.style.color = "#e74c3c"; // Set the feedback message color to red
            return;
        }

        if (message === "") { // Check if the message field is empty
            feedback.innerHTML = "❌ Please enter a message."; // Set the feedback message to indicate that the message is required
            feedback.style.color = "#e74c3c"; // Set the feedback message color to red
            return;
        }

        contactForm.innerHTML = "<h2>✅ Thanks, " + name + "!</h2><p>We've received your message and will be in touch soon.</p>"; // Replace the form content with a thank you message
        feedback.innerHTML = ""; // Clear the feedback message
    });
}


/* ============================================================ */
/* SEARCH FUNCTIONALITY                                          */
/* ============================================================ */

const searchBox = document.getElementById("search-box"); // Get the search box element by its ID

if (searchBox) { // Check if the search box exists
    searchBox.addEventListener("keyup", function() {// Add a keyup event listener to the search box
        const query = this.value.toLowerCase();// Get the current value of the search box and convert it to lowercase
        const items = document.querySelectorAll(".menu-item");// Get all elements with the class "menu-item"
        
        items.forEach(function(item) {// Loop through each menu item to check if it matches the search query
            const text = item.textContent.toLowerCase(); // Get the text content of the menu item and convert it to lowercase
            if (text.includes(query)) { // Check if the menu item text includes the search query
                item.style.display = "block";// Show the menu item if it matches the search query
            } else {// Hide the menu item if it does not match the search query
                item.style.display = "none";// Hide the menu item if it does not match the search query
            }
        });
    });
}

/* ============================================================ */
/* MENU ACCORDION                                                */
/* ============================================================ */

if ($(".menu-item").length) {// Check if there are any elements with the class "menu-item"
    $(".menu-item").click(function() {// Add a click event listener to each menu item
        $(this).find(".menu-description").toggleClass("active");// Toggle the "active" class on the menu description when the menu item is clicked
    });
}

/* ============================================================
   INTERACTIVE MAP WITH LEAFLET
   ============================================================ */

// Find the element where the map should appear.
const mapElement = document.getElementById("map");

// Only run the map code if this page contains a map.
if (mapElement) {

    // Check that the Leaflet library has loaded.
    if (typeof L === "undefined") {

        console.error("Leaflet could not be loaded.");

    } else {

        // Use the original location from our Google Maps embed.
        // Leaflet expects latitude first, then longitude.
        const campusLocation = [
            -29.839632175027326,
            30.9228940756175
        ];

        // Create the map and centre it on the campus.
        const map = L.map("map").setView(campusLocation, 14);

        // Add the map imagery from OpenStreetMap.
        L.tileLayer(
            "https://tile.openstreetmap.org/{z}/{x}/{y}.png",// Use OpenStreetMap tiles
            {
                maxZoom: 19,

                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
        ).addTo(map);

        // Store the locations we want to display.
        const locations = [

            {
                name: "Emeris - Durban Westville Campus",
                coordinates: campusLocation,
                description: "Our original map location."
            },

            {
                name: "Westville Junction",
                coordinates: [-29.83602, 30.91715],
                description: "Our second example location."
            }

        ];

        // Create a marker for every location.
        locations.forEach(function (location) {

            L.marker(location.coordinates)
                .addTo(map)
                .bindPopup(
                    "<strong>" + location.name + "</strong><br>" +
                    location.description
                );

        });

    }

}