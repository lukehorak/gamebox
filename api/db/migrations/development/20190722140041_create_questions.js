
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('questions', function(table){
      table.increments('id');
      table.string('question');
      table.integer('category_id')
        .references('id')
        .inTable('categories');
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('questions')
  ])
};
