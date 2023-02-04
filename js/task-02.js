const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrList = document.querySelector('#ingredients')

for (const ingredient of ingredients) {
    const newIngr = document.createElement('li');

    newIngr.textContent = ingredient;

    newIngr.classList.add('item')

    ingrList.append(newIngr)
}
    console.log(ingrList);