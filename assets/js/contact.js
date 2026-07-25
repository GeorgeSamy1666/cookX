AOS.init({
  duration: 1000,
  once: true,
});

const form = document.getElementById("reservationForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (form.checkValidity()) {
      alert(
        "Thank you for your reservation request!\n\nWe will confirm via email within 2 hours.",
      );

      form.reset();
    } else {
      form.reportValidity();
    }
  });
}

