
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('close_enough', function (table) {
      table.increments('id');
      table.string('question', 1000);
      table.string('answer', 1000);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('close_enough')
  ])
};
