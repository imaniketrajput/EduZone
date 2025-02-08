// Add JavaScript code for any future interactivity
// For example, we can animate the 'Enroll Now' buttons when clicked.

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      alert("You have successfully enrolled in the course!");
      setTimeout(() => {
        window.location.href = "enrol.html";
    }, 1000);
    });
  });