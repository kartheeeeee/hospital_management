window.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
  
    if (!user) {
      alert("Please log in first.");
      window.location.href = "login.html";
      return;
    }
  
    // Fill in profile data
    document.getElementById("user-email").textContent = user.email;
    document.getElementById("regDate").textContent = user.regDate || "N/A";
    document.getElementById("updateDate").textContent = user.updateDate || user.regDate || "N/A";
  
    document.getElementById("userName").value = `${user.firstName} ${user.lastName}`;
    document.getElementById("address").value = user.address;
    document.getElementById("city").value = user.city;
    document.getElementById("gender").value = user.gender;
    document.getElementById("email").value = user.email;
  
    // Edit and Save buttons
    const form = document.getElementById("profileForm");
    const editBtn = document.getElementById("editBtn");
    const saveBtn = document.getElementById("saveBtn");
  
    // Enable editable fields on Edit click
    editBtn.addEventListener("click", () => {
      form.querySelectorAll("input:not([id='userName']):not([id='email']), textarea").forEach(el => el.disabled = false);
      saveBtn.style.display = "inline-block";
      editBtn.style.display = "none";
    });
  
    // Save updated fields
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Update user data
      user.address = document.getElementById("address").value;
      user.city = document.getElementById("city").value;
      user.gender = document.getElementById("gender").value;
      user.updateDate = new Date().toISOString().split('T')[0];
  
      // Save to localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.setItem("chanUser", JSON.stringify(user)); // optional redundancy
  
      alert("Profile updated!");
  
      // Refresh display
      document.getElementById("updateDate").textContent = user.updateDate;
      form.querySelectorAll("input, textarea").forEach(el => el.disabled = true);
      saveBtn.style.display = "none";
      editBtn.style.display = "inline-block";
    });
  });
    // Store user name and email separately for use in other pages (like appointment)
    localStorage.setItem("userName", `${user.firstName} ${user.lastName}`);
    localStorage.setItem("userEmail", user.email);
  