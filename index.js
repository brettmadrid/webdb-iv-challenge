const db = require('./data/dbHelpers.js')

const dishID = 1;
const newDish = "Pancakes";

db.addDish(newDish)
.then(dish => {
  console.log('new dish:', dish)
}).catch(err => {
  console.log('issue with dish')
})

db.getDish(dishID)
.then(dish => {
  console.log('dish', dish)
}).catch(err => {
  console.log('issue with dish')
})

db.getRecipes()
.then(recipe => {
  console.log('recipe', recipe)
}).catch(err => {
  console.log('issue with recipe')
})
