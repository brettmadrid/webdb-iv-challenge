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
  }

  // findAnimals: () => {
  //   return db('animals')
  //   .select('animal_name as name', 'species_name as species', 'zoo_name as zoo')
  //   .innerJoin('species', 'species.id', 'species_id')
  //   .innerJoin('zoos', 'zoos.id', 'zoo_id')
  // }
}