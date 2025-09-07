function register(role) {
  localStorage.setItem("userRole", role);
  window.location.href = "login.html";
}

function login() {
  const role = localStorage.getItem("userRole");
  if (role === "ADK") {
    window.location.href = "dashboard_adk.html";
  } else if (role === "Marketing") {
    window.location.href = "dashboard_marketing.html";
  } else {
    alert("Please register first.");
  }
}
