// // Slug for url adress
// // const test = '10 Easy Ways to learn Js';
// // const message = test.split(" ").join('-').toLowerCase();
// // console.log(message);

// // 
// let longest = ''.length;
// console.log(longest);

// let value = 4;
// let array = [];
// let numbers = [1, 2, 3, 4, 5];
// console.log('Array length is:', numbers.length);
// for (let i = 0; i < numbers.length; i++) {
// console.log(numbers[i]);
// if (numbers[i] > value) {
//     array.push(numbers[i])
//     console.log(array);
// }
// }

// function filterArray(numbers, value) {
//     const newArray = [];
//     for(let i = 0; numbers.length > i; i++){
       
//         if (numbers[i]>value){
//             newArray.push(numbers[i])
//         }
      
//     }
//   return newArray
// }
// const fn = function TotalPrice(items) {
//     let total = 0;
//     for (const price of items) {
//         total += price
//     }
//     return `Сумма чисел: ${total}`
// }
// console.log(fn([1, 2, 3, 4, 5]))

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
// //   console.log(key);
//   // Значення властивості з таким ключем
// //   console.log(book[key]);
// }

// const animal = {
//     legs: 4,
//     height: 'middle',
//     weight: '7kg'
// }
// const dog = Object.create(animal);
// dog.name = 'Ajax';

// console.log(dog.name);
// console.log(dog.legs, dog.height);

// console.log(animal.hasOwnProperty('name'));
// console.log(animal.hasOwnProperty('legs'));

// console.log(dog.hasOwnProperty('legs'));
// console.log(dog.hasOwnProperty('name'));

// console.log(Object.keys(animal));

// for (const key of Object.keys(animal)) {
//     console.log(key);
//     console.log(animal[key]);
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
    
//     console.log(rgbColors);
//     console.log(hexColors);
//  }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (let product of products) {
//     if (productName === product.name) {
//       return product.price
//     }
//   }
// }
// console.log(getProductPrice('Scanner'))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//     let total = [];

// for (let product of products) {
//   const keys = Object.keys(product)

//   for (let key of keys) {
//     if (key === propName) {
//       total.push(product[key])
//     }
//   }
// }

// return total
// }
//  console.log(getAllPropValues('quantity'))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total = 0;

//   for (let product of products) { // добавляем обьект и перебираем
//       console.log(product)
//       if (productName === product['name']) { // если заданое имя переменной функции соотствует значению свойства 'name' обьекта, ищем сумму  
//         console.log(product['name']) // проверяем значение свойства имени обьекта
//         console.log(product['price']) // проверяем значение цены обьекта
//         total = product['price'] * product['quantity']; // считаем общую сумму покупки
//       }
//     }
// return total
// }
// calculateTotalPrice('Droid')

// const numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers);
// console.log(...numbers);
// console.log(Math.max(...numbers))

// const first = 'juice'
// let second = 'peach'
// let third = 'banana'

// const object = { ...{first, second, third} }
// console.log(object)

// function add(...args) {
//   let total = 0;
 
//   for (const value of args) {
//     total += value
//   }
  
//   return total
  
// }
// console.log(add(15, 27));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {

//     const isPresent = this.books.indexOf(oldName);
//     return this.books.splice(isPresent, 1, newName);
//   }
// };
// console.log(bookShelf.updateBook(["The last kingdom", "Hazebubu"]))

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       console.log(potion.name === newPotion.name)
//     } 
//   }
// }
// atTheOldToad.addPotion({ name: "Speed potion", price: 460 })
// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }))

// SHOP CART

// const cart = {
//   items: [],
//   getItems() {
//     return this.items
//   },
//   add(product) {
//     this.items.push(product)
//   },
//   remove(productName) {

//     const { items } = this;

//    for (let i = 0; i < items.length; i += 1) {
    
//      const { name } = items[i];     
//      if (name === productName.name) {
//       items.splice(i, 1)
//      }
//    }
//   },
//   totalPrice() {
    
//   }
// }

// cart.add({ name: 'Banana', value: 150 })
// cart.add({ name: 'Berry', value: 70 })
// cart.add({ name: 'Pineapple', value: 100 })
// cart.add({ name: 'Bread', value: 30 })

// console.table(cart.getItems());

// cart.remove({ name: 'Pineapple', value: 100 })
// console.table(cart.getItems());

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Supercheese', function greet(pizzaName) {
//   console.log(`Ласкаво просимо ${pizzaName}.`)
// })

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//      return onSuccess(pizzaName)
//     }
//     return onError(pizzaName)
//   },
// };
// Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function(params) {
//     totalPrice += params;
//     console.log(params)
//   })

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([1, 3, 14, 18, 19, 8, 20]))

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((params) => {
//     if (secondArray.includes(params)) {
//       commonElements.push(params)
//     }
//   })

//   console.log(commonElements);
// }

// // getCommonElements([1, 2, 4, 6, 8, 9], [1, 2, 8])

// function changeEven(numbers, value) {
//   const newArray = [];

//   numbers.forEach((params) => {

//     if (params % 2 === 0) {
//       newArray.push(params + value)
//     }
//   })
//   return newArray
// }

// console.log(changeEven([2, 4, 8, 9, 11], 11))

// Change code below this line

// const getUsersWithFriend = (users, friendName) => {

//   return users.filter(user => user.friends.includes(friendName)).map(user => user.name)
// };

// console.log(getUsersWithFriend([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ], "Briana Decker"))

const getFriends = (users) => {
  const allFriends = users.flatMap(({ friends }) => friends);
  return allFriends
//   const filteredFriends = allFriends.filter((friends, index, array) => array.indexOf(friends) === index);
// return filteredFriends
}

console.log(getFriends([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]))