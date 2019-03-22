const db = require('./data/dbHelpers.js')

const dishID = 3;

db.getDish(dishID)
.then(dish => {
  console.log('dish', dish)
}).catch(err => {
  console.log('issue with dish')
})