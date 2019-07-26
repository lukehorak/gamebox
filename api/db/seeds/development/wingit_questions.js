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
          question: 'you are over 6ft tall',
          category: 'hand',
        },
        {
          question: 'you have never seen Batman in real life',
          category: 'hand',
        },
        {
          question: 'you are currently wearing glasses(not contacts)',
          category: 'hand',
        },
        {
          question: 'you see dead people',
          category: 'hand',
        },
        {
          question: 'you know who Ned Stark is',
          category: 'hand',
        },
        {
          question: 'you have never been to a job interview',
          category: 'hand',
        },
        {
          question: 'you ever had a parking ticket',
          category: 'hand',
        },
        {
          question: 'you have seen a Marvel movie',
          category: 'hand',
        },
        {
          question: 'you are currently wearing a shirt with buttons',
          category: 'hand',
        },
         {
           question: 'you hate puppies',
          category: 'hand',
         },
        {
          question: 'you like this game',
          category: 'hand',
        },
        {
          question: 'is sitting to your right',
          category: 'point',
        },
        {
          question: 'is wearing red',
          category: 'point',
        },
        {
          question: 'you would eat first if you were all trapped on a desert island',
          category: 'point',
        },
        {
          question: 'is the tallest person playing',
          category: 'point',
        },
        {
          question: 'is your favourite developer',
          category: 'point',
        },
        {
          question: 'the number of pizza slices you had today',
          category: 'count',
        }, 
        {
          question: 'the number of tentacles an octopus has',
          category: 'count',
        }, 
        {
          question: '1 + 1 =',
          category: 'count',
        }, 
        {
          question: 'the number of wheels an airplane has',
          category: 'count',
        },
        {
          question: 'feet you are tall',
          category: 'count',
        },
        {
          question: 'the number of meals you\'ve eaten today',
          category: 'count',
        },
        {
          question: 'the number of Disney movies you\'ve seen this year',
          category: 'count',
        }


      ]);
    });
};