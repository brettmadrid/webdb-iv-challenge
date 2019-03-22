exports.up = function(knex, Promise) {
  return knex.schema.createTable("quantities", tbl => {
    tbl.integer("ingredient_id");
    tbl
      .foreign("ingredient_id")
      .references("id")
      .on("ingredients");

    tbl.integer("recipe_id");
    tbl
      .foreign("recipe_id")
      .references("id")
      .on("recipes");
    tbl.primary(["ingredient_id", "recipe_id"], "id");

    tbl.float('amount')
      .unsigned()
      .notNullable();

    tbl.string('measurement').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quantities');
}
