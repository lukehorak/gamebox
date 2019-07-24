//const dotenv = require('dotenv')
const ENV = process.env.ENV || "development";
const knexConfig = require("../../knexfile");
const knex = require("knex")(knexConfig[ENV]);



// module.exports = {

let generateQuestion = function(category_id) 
  {
    knex.select('question')
      .from('questions')
      .where('category_id', '=', category_id)
      .limit(1)
      // .asCallback(cb)
      // .then(rows => console.log(rows))
      .then(rows => 
        rows.forEach(row => 
          {
            console.log(row.question)
          }
        )
      )

}

generateQuestion(3)