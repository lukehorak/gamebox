exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('close_enough').del()
    .then(function () {
      // Inserts seed entries
      return knex('close_enough').insert([

        {
          question: 'In 2002, Bruce Willis sent 12,000 boxes of _____ to U.S. soldiers in Afghanistan.',
          answer: 'GIRL SCOUT COOKIES',
        },
        {
          question: 'A woman in Muncie, Indiana was hospitalized after trying to remove a callus on her foot with a _____.',
          answer: 'SHOTGUN',
        },
        {
          question: 'you have never seen Batman in real life',
          answer: 'hand',
        },
        {
          question: 'you are currently wearing glasses(not contacts)',
          answer: 'hand',
        },
        {
          question: 'you see dead people',
          answer: 'hand',
        },
        {
          question: 'you know who Ned Stark is',
          answer: 'hand',
        },
        {
          question: 'you have never been to a job interview',
          answer: 'hand',
        },
        {
          question: 'you ever had a parking ticket',
          answer: 'hand',
        },
        {
          question: 'you have seen a Marvel movie',
          answer: 'hand',
        },
        {
          question: 'you are currently wearing a shirt with buttons',
          answer: 'hand',
        },
        {
          question: 'you hate puppies',
          answer: 'hand',
        },
        {
          question: 'you like this game',
          answer: 'hand',
        },
        {
          question: 'is sitting to your right',
          answer: 'point',
        },
        {
          question: 'is wearing red',
          answer: 'point',
        },
        {
          question: 'you would eat first if you were all trapped on a desert island',
          answer: 'point',
        },
        {
          question: 'is the tallest person playing',
          answer: 'point',
        },
        {
          question: 'is your favourite developer',
          answer: 'point',
        },
        {
          question: 'the number of pizza slices have you had today',
          answer: 'count',
        },
        {
          question: 'the number of tentacles an octopus have',
          answer: 'count',
        },
        {
          question: '1 + 1 =',
          answer: 'count',
        },
        {
          question: 'the number of wheels an airplane have',
          answer: 'count',
        },
        {
          question: 'how many feet you are tall',
          answer: 'count',
        },
        {
          question: 'the number of meals you\'ve eaten today',
          answer: 'count',
        },
        {
          question: 'the Disney movies you\'ve seen this year',
          answer: 'count',
        }


      ]);
    });
};