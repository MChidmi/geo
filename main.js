// main.js
$(document).ready(function() {
    $('#load-data').click(function() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1', // Example API
            type: 'GET',
            success: function(response) {
                $('#result').html(`
                    <h2>${response.title}</h2>
                    <p>${response.body}</p>
                `);
            },
            error: function(error) {
                $('#result').html('<p>Error loading data.</p>');
            }
        });
    });
});
