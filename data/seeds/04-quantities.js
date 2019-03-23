
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quantities').insert([
        {ingredient_id: 2, recipe_id: 1, amount: 2, measurement: 'cup'},
        {ingredient_id: 3, recipe_id: 1, amount: 1, measurement: 'cup'},
        {ingredient_id: 4, recipe_id: 1, amount: 8, measurement: 'ounces'},
        {ingredient_id: 7, recipe_id: 1, amount: 8, measurement: 'ounces'},
        {ingredient_id: 6, recipe_id: 2, amount: 1, measurement: 'lb'},
        {ingredient_id: 7, recipe_id: 2, amount: 16, measurement: 'ounces'},
        {ingredient_id: 3, recipe_id: 3, amount: 1, measurement: 'cup'},
        {ingredient_id: 5, recipe_id: 3, amount: 1, measurement: 'lb'},
        {ingredient_id: 8, recipe_id: 3, amount: 6, measurement: 'each'},
        {ingredient_id: 2, recipe_id: 4, amount: 2, measurement: 'cup'},
        {ingredient_id: 3, recipe_id: 4, amount: 2, measurement: 'cup'},
        {ingredient_id: 7, recipe_id: 4, amount: 8, measurement: 'ounces'}
      ]);

    });
};
