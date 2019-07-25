const ENV = process.env.ENV || "development";
const knexConfig = require("../../knexfile");
const knex = require("knex")(knexConfig[ENV]);


// module.exports = {

let generateCloseEnoughQ = function () {
  knex.select('question', 'answer')
    .from('close_enough')
    .orderByRaw('random()')
    .limit(1)
    .then(rows =>
        console.log("question: " + rows[0].question, "answer: " + rows[0].answer)
    )
}

// }

generateCloseEnoughQ()