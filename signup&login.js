document.addEventListener('DOMContentLoaded', function () {
    // Sign Up form submission
    const signupForm = document.getElementById('signup');
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const cpassword = document.getElementById('cpassword').value.trim();

        if (!username || !password || !cpassword) {
            alert('Please fill out all fields.');
            return;
        }

        if (password !== cpassword) {
            alert('Passwords do not match.');
            return;
        }

        // Send signup data to the server
        const formData = new FormData(signupForm);
        fetch('signup.php', {  // Assuming 'signup.php' handles user registration
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'success') {
                alert('Signup successful! Please login.');
                window.location.href = 'login.html'; // Redirect to the login page
            } else {
                alert('Signup failed: ' + data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem signing up.');
        });
    });

    // Login form submission
    const loginForm = document.querySelector('.login-form form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const loginUsername = document.getElementById('loginUsername').value.trim();
        const loginPassword = document.getElementById('loginPassword').value.trim();

        if (!loginUsername || !loginPassword) {
            alert('Please fill out both fields.');
            return;
        }

        // Send login data to the server
        const loginFormData = new FormData(loginForm);
        fetch('login.php', {  // Assuming 'login.php' handles user authentication
            method: 'POST',
            body: loginFormData
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'success') {
                alert('Logged in successfully!');
                window.location.href = 'index.html'; // Redirect to the homepage
            } else {
                alert('Login failed: ' + data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem logging in.');
        });
    });
});
