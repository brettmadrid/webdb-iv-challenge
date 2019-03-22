const knex = require('knex');

const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development);

module.exports = {

  getDishes: () => {
    return db('dishes')
  },

  getDish: (id) => {
    return db('dishes')
    .where({ id })
  },

  addDish: (dish) => {
    return db('dishes')
    .insert({ dish_name: dish })
  }

  // findZoos: () => {
  //   return db('zoos')
  //   .select('zoo_name as Zoo', 'address')
  //   .innerJoin('addresses', 'zoos.id', 'zoo_id')
  // },

  // findAnimals: () => {
  //   return db('animals')
  //   .select('animal_name as name', 'species_name as species', 'zoo_name as zoo')
  //   .innerJoin('species', 'species.id', 'species_id')
  //   .innerJoin('zoos', 'zoos.id', 'zoo_id')
  // }
}