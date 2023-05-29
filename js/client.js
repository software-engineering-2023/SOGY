const openAccountForm = () => {
  document.getElementById('accountForm').hidden = false;
}
const removeAlert = () => {
  document.getElementById('alert').hidden = true;
}

const makeAlert = () => {
  document.getElementById('alert').hidden = false;
}


window.addEventListener("DOMContentLoaded", (event) => {
  const accountForm = document.getElementById('accountForm');
  if (accountForm) {
    accountForm.addEventListener('submit', function (event) {
      event.preventDefault();

      accountForm.hidden = true;
      document.getElementById('alert').hidden = false;
      document.getElementById('accountForm').hidden = true;

    });
  }
});
