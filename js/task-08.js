const submitForm = document.querySelector(".login-form");

submitForm.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля!");
  } else {
    const dataForm = { email: email.value, password: password.value };
    console.log(dataForm);

    event.currentTarget.reset();
  }
}
