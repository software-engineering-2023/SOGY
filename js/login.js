window.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;


      if (email != "" && password != "") {
        console.log(`Login with: Email: ${email}, Password: ${password}`);
        if (email == 'client@gmail.com') {
          localStorage.setItem("type", "client");
          window.location.href = "clientBankAccounts.html";
        } else if (email == 'banker@gmail.com') {
          localStorage.setItem("type", "banker");
          window.location.href = "bankerOnlineAccountApplications.html";
        } else if (email == 'admin@gmail.com') {
          window.location.href = "adminReports.html";
          localStorage.setItem("type", "admin");
        }
      }

    });
  }
});