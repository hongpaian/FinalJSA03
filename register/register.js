const eyeoff = document.querySelector(".eyeicon"),
  input = document.querySelector(".inputtext");
grad = document.querySelector(".grad");
eyeoff.addEventListener("click", () => {
  eyeoff.classList.toggle("none");
  grad.classList.toggle("pause");
  input.type === "password" ? (input.type = "text") : (input.type = "password");
});
for (let i = 0; i < 800; i++) {
  let cube = `
<div class="cube"></div>
            `;
  document.querySelector(".cubes").insertAdjacentHTML("afterbegin", cube);
}

const register = document.querySelector("#register");
var totalEmail = JSON.parse(localStorage.getItem('email'));
var totalPass = JSON.parse(localStorage.getItem('pass'));
if (!totalEmail){
  totalEmail = [];
  totalPass = [];
};
register.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let rePass = document.getElementById('repassword').value;

    if(password.length < 8) {
        alert('Password must be longer than 8 characters!');
    }
    else if(password != rePass) {
        alert('Password must be the same re-password!');
    }
    else if(totalEmail.indexOf(email) >= 0){
        alert('Email already in use!');
    }
    else {    
        totalEmail.push(email);
        totalPass.push(password);
        localStorage.setItem('email',JSON.stringify(totalEmail));
        localStorage.setItem('pass',JSON.stringify(totalPass));
        location.replace ("../login/login.html");
    }
})

function a(){
  location.replace("../login/login.html")
}
