const signupButton = document.getElementById("signup-btn");
const form = document.getElementById("form");

const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("con-password");

const loginContainer = document.querySelector(".login-form-container");
const profileContainer = document.querySelector(".profile-container");
profileContainer.style.display = "none";

// Function to generate random token
function getToken(){
    let temp = "0123456789ABCDERGHIJKabcefghji";
    let token = "";
    for(let i=0; i<16; i++){
        token += temp.charAt(Math.floor(Math.random()*30));
    }
    return token;
}

// add a event listener to form wgen click on signup button
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userToken = getToken();
    localStorage.setItem("token", userToken);
    localStorage.setItem("name", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("confirmPassword", confirmPassword.value);
    loginContainer.style.display = "none";
    showProfile(userToken);
})

// Function to show profile
function showProfile(token){
    if(token){
        // profileContainer.innerHTML = "";
        profileContainer.innerHTML = `<h1>Profile</h1>
        <p>Full Name : ${localStorage.getItem("name")}</p>
        <p>Email : ${localStorage.getItem("email")}</p>
        <p>Password : ${localStorage.getItem("password")}</p>

        <button id="logout-btn">Logout</button>`;

        profileContainer.style.display = "block";

        const logoutButton = document.getElementById("logout-btn");
        logoutButton.addEventListener("click", showForm);
    }
}

// Function to show again a signup form
function showForm(){
    profileContainer.style.display = "none";
    loginContainer.style.display = "block";
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";

    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("confirmPassword");
}
