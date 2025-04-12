document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const termsChecked = document.getElementById("terms").checked;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (!termsChecked) {
    alert("Please accept the Terms and Conditions.");
    return;
  }

  // Store user info in localStorage
  const user = {
    firstName,
    lastName,
    email,
    address,
    city,
    gender,
    password,
    regDate: new Date().toISOString().split("T")[0],
  };

  localStorage.setItem("chanUser", JSON.stringify(user));
  localStorage.setItem("userName", `${firstName} ${lastName}`);
  localStorage.setItem("userEmail", email);

  alert("Registration successful! Please log in.");

  // Redirect to login page
  window.location.href = "login.html";
});
