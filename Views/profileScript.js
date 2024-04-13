//get profile info
function getProfileInfo() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/profile", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    
    var profileInfo = []; // Array to store values
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
                // get pfrofileData from server
                var profileData = JSON.parse(xhr.responseText);

                // Store in Array
                profileInfo.push(profileData.email);
                profileInfo.push(profileData.username);
                profileInfo.push(profileData.firstname);
                profileInfo.push(profileData.lastname);
                profileInfo.push(profileData.address);
                profileInfo.push(profileData.password);
                
            } else {
                // Error
                alert("Something went wrong");
                console.log("Something went wrong");
        }
        
    };
    
    xhr.send();
    
    return profileInfo; // Return the array with the profile info
}


//check if user is logged in.
function checkLoggedIn(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/checklogin", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(true);
            }
            else callback(false);
        }

        callback(false);
    };
    xhr.send();
}

//display profile info.
checkLoggedIn(function(isLoggedIn) {    //first check if user is logged in
    if (isLoggedIn) {
        var profileInfoArray = getProfileInfo();
        if (profileInfoArray.length > 0) {
            var userNameElement = document.getElementById("userName");
            var emailElement = document.getElementById("email");
            var firstNameElement = document.getElementById("firstName");
            var lastNameElement = document.getElementById("lastName");
            var addressElement = document.getElementById("address");


            var email = profileInfoArray[0];
            var username = profileInfoArray[1];
            var firstName = profileInfoArray[2];
            var lastName = profileInfoArray[3];
            var address = profileInfoArray[4];

            // Update the text on the website with the profile information
            userNameElement.textContent = "Name: " + username;
            emailElement.textContent = "Email: " + email;
            firstNameElement.textContent = "First Name: " + firstName;
            lastNameElement.textContent = "Last Name: " + lastName;
            addressElement.textContent = "Address: " + address;
        }
    }
    //if not logged in go to login page.
    else window.location.href = 'register.html';
});








document.getElementById('editProfileButton').addEventListener('click', function() {
    var editElements = document.getElementsByClassName('editInfo');
    for (var i = 0; i < editElements.length; i++) {
        editElements[i].style.display = 'block';
    }
    var elements = document.getElementsByClassName('userInfo');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
});