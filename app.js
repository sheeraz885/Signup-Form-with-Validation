// to save user data in array 
var userDataList = [];

var nameValid = false;
var emailValid = false;
var mobileValid = false;
var passwordValid = false;
var cityValid = false;
var genderValid = false;

function submission(e) {
    e.preventDefault();

    // Input elements
    var cityOption = document.getElementById("city");
    var genderOption = document.getElementsByName("gender");

    // Error elements
    var genderErr = document.getElementById("errorGender");
    var cityErr = document.getElementById("errorCity");
  

    // City validation
    if (cityOption.selectedIndex === 0) {
        cityErr.innerText = "Kindly select a city!";
        cityErr.style.display = "block";
    } else {
        cityErr.style.display = "none";
        cityValid = true;
    }

    // Gender validation
    var selectedGender = "";
    for (var i = 0; i < genderOption.length; i++) {
        if (genderOption[i].checked) {
            selectedGender = genderOption[i].value;
            break;
        }
    }

     //checking gender selection condition
    if (!selectedGender) {
        genderErr.innerText = "Kindly select a gender option!";
        genderErr.style.display = "block";
    } else {
        genderValid = true;
        genderErr.style.display = "none";
    }

    // If all fields are valid, save data and reset the form
    if (nameValid&&emailValid&&mobileValid&&genderValid&&cityValid&&passwordValid) {
        alert("Form is Completed");
        toSaveData();
    } else {
        alert("Form is Incomplete");

        // to show error in empty inputs after submission
        if (!nameValid) {
            document.getElementById("errorName").style.display = "block";
        }
        if (!emailValid) {
            document.getElementById("errorEmail").style.display = "block";
        }
        if (!mobileValid) {
            document.getElementById("errorMobile").style.display = "block";
        }
        if (!passwordValid) {
            // document.getElementById("errorPassword").style.innerText = "Passowrd must required !";
            // document.getElementById("errorPassword").style.display = "block";
           alert("Enter Password kindly!!")
        
        }
        if (!cityValid) {
            document.getElementById("errorCity").style.display = "block";
        }
        if (!genderValid) {
            document.getElementById("errorGender").style.display = "block";
        }
    }
}


// Function to save user data
function toSaveData() {
    var userName = document.getElementById("name").value;
    var userPassword = document.getElementById("password").value;
    var userEmail = document.getElementById("email").value;
    var userNumber = document.getElementById("mobile").value;
    var userCity = document.getElementById("city").value;

    // Get the selected gender
    var genderOption = document.getElementsByName("gender");
    var userGender = "";
    for (var i = 0; i < genderOption.length; i++) {
        if (genderOption[i].checked) {
            userGender = genderOption[i].value;
            break;
        }
    }

    // Constructor for user data
    function Data(userName, userEmail, userNumber, userPassword, userGender, userCity) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userNumber = userNumber;
        this.userPassword = userPassword;
        this.userGender = userGender;
        this.userCity = userCity;
    }

    // Saving data in an object
    var userData = new Data(userName, userEmail, userNumber, userPassword, userGender, userCity);
    userDataList.push(userData);

    console.log("User Data Saved: ", userData);
    resetForm();
}

// Function to reset the form
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("password").value = "";
    document.getElementById("city").selectedIndex = 0;
    var genderOptions = document.getElementsByName("gender");
    for (var i = 0; i < genderOptions.length; i++) {
        genderOptions[i].checked = false;
    }
    
      // Reset the validity flags
      nameValid = false;
      emailValid = false;
      mobileValid = false;
      passwordValid = false;
      cityValid = false;
      genderValid = false;
}

// checking validation of inputs
    function check(e, inputValue) {
    var ErrName = document.getElementById("errorName");
    var ErrEmail = document.getElementById("errorEmail");
    var ErrMobile = document.getElementById("errorMobile");
    var ErrPassword = document.getElementById("errorPassword");

    // Name validation
    if (inputValue === "name") {
        if (e.target.value.length < 3) {
            ErrName.innerText = "At least 3 characters are required.";
            ErrName.style.display = "block";
        } else {
            ErrName.style.display = "none";
            nameValid = true;
        }
    }

    // Email validation
    if (inputValue === "email") {
        var regex = /^[\w\-.\+]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,4}$/;
        if (!e.target.value.match(regex)) {
            ErrEmail.innerText = "Invalid Email Address.";
            ErrEmail.style.display = "block";
        } else {
            ErrEmail.style.display = "none";
            emailValid = true;
        }
    }

    // Mobile Number validation
    if (inputValue === "number") {
        if (e.target.value.length !== 11 || isNaN(e.target.value)) {
            ErrMobile.innerText = "Invalid Mobile Number (11 digits required).";
            ErrMobile.style.display = "block";
        } else {
            ErrMobile.style.display = "none";
            mobileValid = true;
        }
    }

    // Password validation
    if (inputValue === "password") {
        if (e.target.value.length < 9) {
            ErrPassword.innerText = "Weak Password! At least 9 characters required.";
            ErrPassword.style.display = "block";
            passwordValid = false;
        } else {
            ErrPassword.style.display = "none";
            passwordValid = true;
        }
    }
}
