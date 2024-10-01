document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.querySelector('textarea');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If validation passes, you can send the form data using AJAX or proceed with the form submission
        alert('Form submitted successfully!');
        
        // Example: Send form data to server via AJAX (optional)
        // Uncomment below code if you have a server-side script to handle the form submission
        /*
        const formData = new FormData(form);
        fetch('mail.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('Your message has been sent successfully!');
            form.reset(); // Clear the form fields
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem sending your message.');
        });
        */
        
        // For this example, we'll just reset the form
        form.reset();
    });
});
