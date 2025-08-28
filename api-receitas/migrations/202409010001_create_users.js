exports.up = function(knex) {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.string('email').notNullable().unique();
    t.string('password_hash').notNullable();
    t.timestamps(true, true);
  });
};
exports.down = function(knex) { return knex.schema.dropTableIfExists('users'); };
