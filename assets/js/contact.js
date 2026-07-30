AOS.init({
  duration: 1000,
  once: true,
});
const form = document.getElementById("reservationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const guestsInput = document.getElementById("guests");
const phoneInput = document.getElementById("phone");
const requestsInput = document.getElementById("requests");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  clearErrors();

  // Name
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required.");
    isValid = false;
  } else if (!/^[A-Za-z\u0600-\u06FF\s]{3,30}$/.test(nameInput.value.trim())) {
    showError(
      nameInput,
      "Name must contain only letters and be 3-30 characters.",
    );
    isValid = false;
  }

  // Email
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required.");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email address.");
    isValid = false;
  }

  // Date
  if (dateInput.value === "") {
    showError(dateInput, "Please select a date.");
    isValid = false;
  } else {
    const selectedDate = new Date(dateInput.value);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      showError(dateInput, "Reservation date cannot be in the past.");
      isValid = false;
    }
  }

  // Time
  if (timeInput.value === "") {
    showError(timeInput, "Please select a time.");
    isValid = false;
  }

  // Guests
  if (guestsInput.value === "") {
    showError(guestsInput, "Please select number of guests.");
    isValid = false;
  }

  // Phone
  if (phoneInput.value.trim() === "") {
    showError(phoneInput, "Phone number is required.");
    isValid = false;
  } else if (!/^\+?[0-9\s()-]{10,15}$/.test(phoneInput.value.trim())) {
    showError(phoneInput, "Please enter a valid phone number.");
    isValid = false;
  }

  // Requests
  if (requestsInput.value.trim() === "") {
    showError(requestsInput, "Special requests field is required.");
    isValid = false;
  }

  if (isValid) {
    showConfirmation();
    form.reset();
  }
});

function showError(input, message) {
  input.classList.add("is-invalid");

  const error = input.parentElement.querySelector(".error");
  error.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((error) => {
    error.textContent = "";
  });

  document.querySelectorAll(".form-control, .form-select").forEach((field) => {
    field.classList.remove("is-invalid");
  });
}
function showConfirmation() {
  alert(
    "Reservation Confirmed!\n\nThank you for choosing Cook X.\nYour reservation request has been submitted successfully.\nYou will receive a confirmation email within the next 2 hours.",
  );
}


