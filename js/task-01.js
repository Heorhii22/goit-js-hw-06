const category = document.querySelector('#categories')

const listOfCategories = category.querySelectorAll('.item')
console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach((item) => {
    console.log(`Categories: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})

