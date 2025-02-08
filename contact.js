document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
    
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
      }
  
      // Simulate message submission and show response
      contactForm.style.display = 'none'; // Hide the form
      responseMessage.style.display = 'block'; // Show the response message
  
      // Optionally reset the form after a delay
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block'; // Show the form again
        responseMessage.style.display = 'none'; // Hide the response message
      }, 3000); // Reset after 3 seconds
    });
  });
  