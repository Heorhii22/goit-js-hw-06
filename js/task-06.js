const inputValidation = document.querySelector("#validation-input");
const maxSumbolLength = inputValidation.getAttribute("data-length")

console.log(inputValidation)

inputValidation.addEventListener("blur", onInputBlur);

function onInputBlur() {
    if (inputValidation.value.length === Number(maxSumbolLength)) {
        addValid();
        removeInvalid();
    } else if (inputValidation.value === "") {
        removeAllValidation()
    } else {
        addInvalid();
        removeValid();
    }
}

function removeAllValidation() {
    inputValidation.classList.remove("invalid", "valid");
}
function removeValid() {
    inputValidation.classList.remove("valid");
}
function removeInvalid() {
    inputValidation.classList.remove("invalid");
}
 
function addValid() {
    inputValidation.classList.add('valid')
}
function addInvalid() {
    inputValidation.classList.add('invalid')
}


