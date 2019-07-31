exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('wingit').del()
    .then(function () {
      // Inserts seed entries
      return knex('wingit').insert([

        {
          question: 'you drank water today',
          category: 'hand',
        },
        {
          question: 'you think you would be good at being a super hero',
          category: 'hand',
        },
        {
          question: 'you wear glasses',
          category: 'hand',
        },
        {
          question: 'you showered today',
          category: 'hand',
        },
        {
          question: 'you see dead people',
          category: 'hand',
        },
        {
          question: 'you\'ve ever had a parking ticket',
          category: 'hand',
        },
        {
          question: 'you have seen a Marvel movie in the last year',
          category: 'hand',
        },
        {
          question: 'you love Sriracha sauce',
          category: 'hand',
        },
        {
          question: 'you like this game',
          category: 'hand',
        },
        {
          question: 'you think would win a hot dog eating contest',
          category: 'point',
        },
        {
          question: 'is the loudest',
          category: 'point',
        },
        {
          question: 'you would eat first if you were all trapped on a desert island',
          category: 'point',
        },
        {
          question: 'is the best cook',
          category: 'point',
        },
        {
          question: 'you think drinks the most coffee',
          category: 'point',
        },
        {
          question: 'has the best style',
          category: 'point',
        },
        {
          question: 'is your favourite developer',
          category: 'point',
        },
        {
          question: 'you\'d have the best chance of beating in an arm wrestling match',
          category: 'point',
        },
        {
          question: 'you\'d pick to be your partner as a detective',
          category: 'point',
        },
        {
          question: 'the number of slices of pizza you\'ve eaten today',
          category: 'count',
        },
        {
          question: 'the number of tentacles an octopus has',
          category: 'count',
        },
        {
          question: 'hours of sleep you got last night',
          category: 'count',
        },
        {
          question: 'glasses of water you\'ve drank today',
          category: 'count',
        },
        {
          question: 'feet tall you wish you were',
          category: 'count',
        },
        {
          question: 'the number of meals you\'ve eaten today',
          category: 'count',
        },
        {
          question: 'the number of Disney movies you\'ve seen this year',
          category: 'count',
        },
        {
          question: 'the number of drinks you\'ll typically have on a night out',
          category: 'count',
        },
        {
          question: 'the number of pets you have',
          category: 'count',
        }


      ]);
    });
};