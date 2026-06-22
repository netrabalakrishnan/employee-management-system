document
.getElementById("loginForm")
.addEventListener("submit",function(e){

e.preventDefault();

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

if(
username === "admin" &&
password === "admin123"
){

localStorage.setItem(
"isLoggedIn",
"true"
);

window.location.href =
"home.html";

}
else{

alert(
"Invalid Username or Password"
);

}

});