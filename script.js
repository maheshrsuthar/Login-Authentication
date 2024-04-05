document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation to check if username and password are not empty
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }

        // If validation passes, you can proceed with form submission or any other action
        // For demonstration purposes, let's just log the entered credentials
        console.log('Username:', username);
        console.log('Password:', password);

        // Now you can proceed with form submission using AJAX, fetch API, or any other method
        // Example using fetch API:
        /*
        fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        })
        .then(response => response.json())
        .then(data => {
            // Handle response from server
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        */
    });
});
