const db = require('./data/dbHelpers.js')

const dishID = 1;
const newDish = "Pancakes";
const recipeID = '3';

// db.addDish(newDish)
// .then(dish => {
//   console.log('new dish:', dish)
// }).catch(err => {
//   console.log('issue with dish')
// })

  db.addRecipe(dishID)
  .then(recipe => {
    console.log('new recipe', recipe)
  }).catch(err => {
    console.log('issue with recipe')
  })

// db.getDish(dishID)
// .then(dish => {
//   console.log('dish', dish)
// }).catch(err => {
//   console.log('issue with dish')
// })

// db.getShoppingList(recipeID)
// .then(recipe => {
//   console.log('recipe', recipe)
// }).catch(err => {
//   console.log('issue with recipe')
// })
