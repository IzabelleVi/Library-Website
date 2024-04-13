
document.getElementById('createAccountButton').addEventListener('click', function() {
    register();
});

document.getElementById('signInButton').addEventListener('click', function() {
    login();
});


//when clicked on submit send info to database, and go back to login screen.
document.getElementById("registerForm").addEventListener("submit", function(event) {

    var email = document.getElementById("registerEmail").value;
    var username = document.getElementById("registerUsername").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("registerAddress").value;
    var password = document.getElementById("registerPassword").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/checkExist", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                registerUser(email, username, firstName, lastName, address, password);
            } else if (xhr.status === 409){
                alert("Profile already exist");
                console.log("Profile already exist");
            }
            else {
                alert("Something went wrong");
                console.log("Something went wrong");
            }
        }
    };
    xhr.send(JSON.stringify({ username: username }));
});

// Register Fnction
function registerUser(email, username, firstName, lastName, address, password) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/register", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Succesful");
                window.location.href = 'profile.html';
            } else {
                alert("Something went wrong");
                console.log("Something went wrong");
            }
        }

    };
    xhr.send(JSON.stringify({ email: email, username: username, firstName: firstName, lastName: lastName, address: address, password: password }));
}

//when clicked on login, send login info to database and go to profile page.
document.getElementById("loginForm").addEventListener("submit", function(event) {

    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                window.location.href = 'profile.html';
            } else if (xhr.status === 401) {
                alert("Unknown username or password, please try again.");
                console.log("Unknown username or password");
            } else {
                alert("Something went wrong");
                console.log("Something went wrong");
            }
        }
    };
    xhr.send(JSON.stringify({ username: username, password: password }));
});

function login() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('signInButton').style.display = 'none';
    document.getElementById('registerText').style.display = 'none';
    document.getElementById('registerTitle').style.display = 'none';
    document.getElementById('loginText').style.display = 'block';
    document.getElementById('loginList').style.display = 'block';
    document.getElementById('loginTitle').style.display = 'block';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('createAccountButton').style.display = 'block';
}

function register() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('loginText').style.display = 'none';
    document.getElementById('loginTitle').style.display = 'none';
    document.getElementById('loginList').style.display = 'none';
    document.getElementById('createAccountButton').style.display = 'none';
    document.getElementById('registerText').style.display = 'block';
    document.getElementById('registerTitle').style.display = 'block';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('signInButton').style.display = 'block';
}