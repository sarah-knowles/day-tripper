exports.up = function (knex) {
  return knex.schema.createTable('weather', table => {
    table.increments('id')
    table.string('code')
    table.string('name')
    table.string('condition')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('weather')
}
