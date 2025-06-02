document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic form submission handling (for demonstration, won't actually send email)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
                // In a real-world scenario, you'd send this data to a server
                // e.g., fetch('/submit-form', { method: 'POST', body: JSON.stringify({ name, email, message }) });
                contactForm.reset(); // Clear the form
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
