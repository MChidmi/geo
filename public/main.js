$(document).ready(function() {
    function validateForm() {
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/;
        const isEmailValid = emailPattern.test(username);
        $('#email-error').text(isEmailValid ? '' : 'Please enter a valid email address from one of the following providers: Gmail, Yahoo, Outlook, Hotmail.');

        // Password validation
        const isPasswordValid = password.length >= 6;
        $('#password-error').text(isPasswordValid ? '' : 'Password must be at least 6 characters long.');

        // Enable/Disable the submit button based on validation
        $('#login-button').prop('disabled', !(isEmailValid && isPasswordValid));
    }

    // Validate on input change
    $('#username, #password').on('input', validateForm);

    $('#login-form').on('submit', function(e) {
        e.preventDefault();

        // Get values from inputs
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/;
        const isEmailValid = emailPattern.test(username);

        // Password validation
        const isPasswordValid = password.length >= 6;

        // Display validation messages or proceed with login
        if (!isEmailValid) {
            $('#email-error').text('Please enter a valid email address from one of the following providers: Gmail, Yahoo, Outlook, Hotmail.');
            return;
        }

        if (!isPasswordValid) {
            $('#password-error').text('Password must be at least 6 characters long.');
            return;
        }

        // Proceed with login if validations pass
        console.log(`Username: ${username}, Password: ${password}`);
        // Add your login logic here
    });
});


// Where you want to render the map.
var element = document.getElementById('osm-map');

// Height has to be set. You can do this in CSS too.
// element.style = 'height:300px;';

// Create Leaflet map on map element.
var map = L.map(element);

// Add OSM tile layer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Target's GPS coordinates.
var target = L.latLng('31.7945', '-7.0849');

// Set map's center to target with zoom 14.
map.setView(target, 5);

// Place a marker on the same location.
// L.marker(target).addTo(map);
$(".leaflet-control-container").hide();
