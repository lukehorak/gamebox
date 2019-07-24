exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('wingit').del()
    .then(function () {
      // Inserts seed entries
      return knex('wingit').insert([

        {
          question: 'You drank water today',
          category: 'hand',
        },
        {
          question: 'You are over 6ft tall',
          category: 'hand',
        },
        {
          question: 'You have never seen Batman in real life',
          category: 'hand',
        },
        {
          question: 'You are currently wearing glasses(not contacts)',
          category: 'hand',
        },
        {
          question: 'You see dead people',
          category: 'hand',
        },
        {
          question: 'You know who Ned Stark is',
          category: 'hand',
        },
        {
          question: 'You have never been to a job interview',
          category: 'hand',
        },
        {
          question: 'You ever had a parking ticket',
          category: 'hand',
        },
        {
          question: 'You have seen a Marvel movie',
          category: 'hand',
        },
        {
          question: 'You are currently wearing a shirt with buttons',
          category: 'hand',
        },
         {
           question: 'You hate puppies',
          category: 'hand',
         },
        {
          question: 'You like this game',
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
          question: 'How many pizza slices have you had today',
          category: 'count',
        }, 
        {
          question: 'How many tentacles does an octopus have',
          category: 'count',
        }, 
        {
          question: '1 + 1 =',
          category: 'count',
        }, 
        {
          question: 'How many wheels an airplane have',
          category: 'count',
        },
        {
          question: 'feet you are tall',
          category: 'count',
        },
        {
          question: 'Number of meals you\'ve eaten today',
          category: 'count',
        },
        {
          question: 'Disney movies you\'ve seen this year',
          category: 'count',
        }


      ]);
    });
};