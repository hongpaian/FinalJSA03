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

var user =['anlhfs3948','3948']
localStorage.setItem('user',JSON.stringify(user))
function a(){
  location.replace ("../register/register.html");
}
