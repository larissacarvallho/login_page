function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggle = document.getElementById("togglePassword");

  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";

  toggle.classList.toggle("fa-eye");
  toggle.classList.toggle("fa-eye-slash");
}3