
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('categories', function(table){
      table.increments('id');
      table.string('title');
      table.string('description');
      table.string('prefix');
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('categories')
  ])
};
