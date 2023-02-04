const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (evt) => {
  // if (evt.currentTarget.value === '') {
  //     output.textContent = 'Anonymous'
  // } else {
  //      output.textContent = evt.currentTarget.value;
  // }
  evt.currentTarget.value === ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = evt.currentTarget.value);
});
