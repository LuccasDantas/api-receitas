const bcrypt = require('bcryptjs');
exports.seed = async function(knex) {
  await knex('users').del();
  await knex('users').insert([
    { id: 1, name: 'Admin', email: 'admin@example.com', password_hash: bcrypt.hashSync('admin123', 10) }
  ]);
};
