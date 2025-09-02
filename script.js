function toggleForms() {
  const loginBox = document.getElementById("login-box");
  const signupBox = document.getElementById("signup-box");

  if (loginBox.style.display === "none") {
    loginBox.style.display = "block";
    signupBox.style.display = "none";
  } else {
    loginBox.style.display = "none";
    signupBox.style.display = "block";
  }
}

function showDashboard(event) {
  event.preventDefault(); // prevent full page reload

  // submit the form via iframe
  event.target.submit();

  // show dashboard
  document.getElementById("auth-container").style.display = "none";
  document.getElementById("dashboard").style.display = "flex";
}

function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("auth-container").style.display = "block";
}
