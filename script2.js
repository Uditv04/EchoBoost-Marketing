document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form form');
    const usernameInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        // Mock validation (replace with actual logic)
        if (username === 'testuser' && password === 'testpassword') {
            alert('Login successful!');
            // Redirect to another page
            window.location.href = 'index.html'; // Replace with actual dashboard or home page
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
