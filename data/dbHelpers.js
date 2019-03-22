const knex = require('knex');

const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development);

module.exports = {

  getDishes: () => {
    return db('dishes')
  },

  getDish: (id) => {
    return db('dishes')
    .select('dishes.id as dishID', 'dish_name as Dish', 'recipe_name as Recipe')
    .innerJoin('recipes', 'dishes.id', 'dish_id')
    .where({ dishID : id })
  },

  addDish: (dish) => {
    return db('dishes')
    .insert({ dish_name: dish })
  },

  getRecipes: () => {
    return db('recipes')
    .innerJoin('dishes', 'dish_id', 'dishes.id')
    .innerJoin('quantities', 'recipes.id', 'recipe_id')
    .innerJoin('ingredients', 'ingredient_id', 'ingredients.id')
  },

  getShoppingList: (RecipeID) => {
    return db('recipes')
    .innerJoin('dishes', 'dish_id', 'dishes.id')
    .innerJoin('quantities', 'recipes.id', 'recipe_id')
    .innerJoin('ingredients', 'ingredient_id', 'ingredients.id')
    .where({recipe_id: RecipeID})
  },

  addRecipe: (dishID) => {
    return db('recipes')
    .insert({recipe_name: 'Vegan Pizza', dish_id: dishID})
  }
}