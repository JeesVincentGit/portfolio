function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
  let isValid = true;

  // Get input values
  let firstName = document.getElementById("firstName").value.trim();
  let secondName = document.getElementById("secondName").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Get error span elements
  let firstNameError = document.getElementById("firstNameError");
  let secondNameError = document.getElementById("secondNameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");

  // Clear previous errors
  firstNameError.textContent = "";
  secondNameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  // Name Validation (Only alphabets)
  let nameRegex = /^[A-Za-z]+$/;

  if (!nameRegex.test(firstName)) {
      firstNameError.textContent = "Only alphabets allowed!";
      isValid = false;
  }
  if (!nameRegex.test(secondName)) {
      secondNameError.textContent = "Only alphabets allowed!";
      isValid = false;
  }

  // Email Validation
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
      emailError.textContent = "Enter a valid email!";
      isValid = false;
  }

  // Message Validation (Not empty)
  if (message === "") {
      messageError.textContent = "Message cannot be empty!";
      isValid = false;
  }

  // Prevent form submission if validation fails
  if (!isValid) {
      event.preventDefault();
  }
});