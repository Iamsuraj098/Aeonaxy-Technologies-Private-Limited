function Next_page(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (validateForm(name, email, username, password)) {
        submitForm(name, email, username, password);
    }
}

function validateForm(name, email, username, password) {
    // Validate form fields
    if (name === '') {
        showMessage('Please enter your name.');
        return false;
    }

    if (username === '') {
        showMessage('Please enter a username.');
        return false;
    }

    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.');
        return false;
    }

    if (password.length < 6) {
        showMessage('Your password must be at least 6 characters long.');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    // Simple email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}

function submitForm(name, email, username, password){
    // add database 
    window.location.href = "createprofile/CreateProfile.html";
<<<<<<< HEAD
}
=======
}
>>>>>>> fbfb7af92e64e692dbbb978350e2746c054b7bbe
