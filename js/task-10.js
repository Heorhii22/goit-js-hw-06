const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const controlBox = document.querySelector('#controls');
const typeEl = controlBox.querySelector('input');
const randomBoxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const itemsList = [];
    
    amount = Number(typeEl.value);
    itemsList.length = amount;

    itemsList.fill("").map((element, index) => {
        itemsList.forEach((item) => {
            element = document.createElement('div')
            element.style.width = 30 + index * 10 + 'px';
            element.style.height = 30 + index * 10 + 'px';
            element.style.backgroundColor = getRandomHexColor();
        })
        itemsList[index] = element;
    })
    randomBoxes.append(...itemsList);
    console.log(itemsList)
}

function destroyBoxes(amount) {
    randomBoxes.innerHTML = '';
    typeEl.value = '';
}
