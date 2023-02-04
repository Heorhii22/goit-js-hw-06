const sizeController = document.querySelector('#font-size-control');

const controllerText = document.querySelector("#text")

sizeController.addEventListener('input', onChangeInputRange)

function onChangeInputRange() {
    controllerText.style.fontSize = `${sizeController.value}px`;
}
