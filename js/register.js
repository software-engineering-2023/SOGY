window.addEventListener("DOMContentLoaded", (event) => {
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const password = document.getElementById('password1').value;
      const password2 = document.getElementById('password2').value;


      if (password == password2) {
        console.log(`register`);
        document.getElementById('alert').hidden = false;
        document.getElementById('message').innerHTML = "";
      } else {
        document.getElementById('message').innerHTML = "The passwords don't match"
      }

    });
  }
});