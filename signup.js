document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const cpasswordInput = document.getElementById('cpassword');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const cpassword = cpasswordInput.value.trim();

        // Basic validation
        if (!username) {
            alert('Please enter a username.');
            return;
        }

        if (!password) {
            alert('Please enter a password.');
            return;
        }

        if (password !== cpassword) {
            alert('Passwords do not match.');
            return;
        }

        // If validation passes
        alert('Signup successful!');

        // You can replace this with your actual signup logic
        // E.g., sending data to a server via AJAX

        // Example: Redirecting to another page after successful signup
        window.location.href = 'index.html'; // Replace with your actual destination
    });
});
