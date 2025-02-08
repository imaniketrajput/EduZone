function showSignup() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function showLogin() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function validateLogin() {
    const userId = document.getElementById("login-id").value;
    const password = document.getElementById("login-password").value;

    if (userId === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Simulate a successful login
    alert("Login successful! Redirecting to the home page...");

    // Redirect to index.html after 1 second
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);

    return false; // Prevent form submission (for demonstration purposes)
}

function validateSignup() {
    const userId = document.getElementById("signup-id").value;
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (userId === "" || name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Simulate a successful signup
    alert("Signup successful! Redirecting to the home page...");

    // Redirect to index.html after 1 second
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);

    return false; // Prevent form submission (for demonstration purposes)
}