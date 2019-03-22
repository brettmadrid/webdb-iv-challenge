
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('recipe_name').notNullable().unique()
    tbl.integer('dish_id')
    tbl
      .foreign("dish_id")
      .references("id")
      .on("dishes");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
