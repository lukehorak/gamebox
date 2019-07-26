
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('wingit', function(table){
      table.increments('id');
      table.string('question', 1000);
      table.string('category', 1000);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('wingit')
  ])
};