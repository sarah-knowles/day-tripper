
exports.up = function(knex) {
  return knex.schema.createTable('trips', table => {
    table.increments('id')
    table.string('code')
    table.string('activity')
  })
}


exports.down = function(knex) {
  return knex.schema.dropTable('trips')
};
