exports.up = function(knex) {
  return knex.schema.createTable('ingredients', (t) => {
    t.increments('id').primary();
    t.string('name').notNullable().unique();
    t.timestamps(true, true);
  });
};
exports.down = function(knex) { return knex.schema.dropTableIfExists('ingredients'); };
