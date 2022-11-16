(function () {
  "use strict";

  // Fetch all the forms we want to apply validation to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const confirmPw = document.querySelector("#confirmPassword");
const pw = document.querySelector("#password");
const passwordNoMatch = document.querySelector(".password-no-match");

confirmPw.addEventListener("keyup", () => {
  if (confirmPw.value != pw.value) {
    if (!passwordNoMatch.classList.contains("show")) {
      passwordNoMatch.classList.add("show");
    }
  } else if (confirmPw.value === pw.value) {
    passwordNoMatch.classList.remove("show");
  }
});
