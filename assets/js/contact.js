AOS.init({
  duration: 1000,
  once: true,
});

const form = document.getElementById("reservationForm");

//validation and get elements by input names
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form["name"].value.trim();
  const email = form["email"].value.trim();
  const date = form["date"].value;
  const time = form["time"].value;
  const guests = form["guests"].value;
  const phone = form["phone"].value.trim();
  const requests = form["requests"].value.trim();

  const regExName = /^[A-Za-z ]{3,20}$/;
  const regExPhone = /^01[0125][0-9]{8}$/;
  const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regExName.test(name)) {
    alert("Invalid Name");
    return;
  }

  if (!regExEmail.test(email)) {
    alert("Invalid Email");
    return;
  }

  if (!regExPhone.test(phone)) {
    alert("Invalid Phone");
    return;
  }

  if (date === "") {
    alert("Choose Date");
    return;
  }

  if (time === "") {
    alert("Choose Time");
    return;
  }

  if (guests === "") {
    alert("Choose Number of Guests");
    return;
  }

  if (
    regExName.test(name) &&
    regExEmail.test(email) &&
    regExPhone.test(phone) &&
    date !== "" &&
    time !== "" &&
    guests !== ""
  ) {
    alert(
      "Thank you for your reservation request!\n\nWe will confirm via email within 2 hours.",
    );
    form.reset();
  }
});

