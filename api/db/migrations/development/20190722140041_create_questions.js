
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('questions', function(table){
      table.increments('id');
      table.string('question', 1000);
      table.integer('category_id');
      table.foreign('category_id')
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
