const db = require('./data/dbHelpers.js')

const dishID = 1;
const newDish = "Pancakes";

db.getDish(dishID)
.then(dish => {
  console.log('dish', dish)
}).catch(err => {
  console.log('issue with dish')
})

// db.addDish(newDish)
// .then(dish => {
//   console.log('new dish:', dish)
// }).catch(err => {
//   console.log('issue with dish')
// })