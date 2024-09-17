$(document).ready(function() {
    function validateForm() {
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/;
        const isEmailValid = emailPattern.test(username);

        // Password validation
        const isPasswordValid = password.length >= 6;

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
            alert('Please enter a valid email address from one of the following providers: Gmail, Yahoo, Outlook, Hotmail.');
            return;
        }

        if (!isPasswordValid) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // Proceed with login if validations pass
        console.log(`Username: ${username}, Password: ${password}`);
        // Add your login logic here
    });
});
