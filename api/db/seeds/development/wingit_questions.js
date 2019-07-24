exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([

        {
          question: 'You drank water today',
          category_id: 1,
        },
        {
          question: 'You are over 6ft tall',
          category_id: 1,
        },
        {
          question: 'You have never seen Batman in real life',
          category_id: 1,
        },
        {
          question: 'You are currently wearing glasses(not contacts)',
          category_id: 1,
        },
        {
          question: 'You see dead people',
          category_id: 1,
        },
        {
          question: 'You know who Ned Stark is',
          category_id: 1,
        },
        {
          question: 'You have never been to a job interview',
          category_id: 1,
        },
        {
          question: 'You ever had a parking ticket',
          category_id: 1,
        },
        {
          question: 'You have seen a Marvel movie',
          category_id: 1,
        },
        {
          question: 'You are currently wearing a shirt with buttons',
          category_id: 1,
        },
        {
          question: 'is sitting to your right',
          category_id: 2,
        },
        {
          question: 'is wearing red',
          category_id: 2,
        },
        {
          question: 'How many pizza slices have you had today',
          category_id: 3,
        }, 
        {
          question: 'How many tentacles does an octopus have',
          category_id: 3,
        }, 
        {
          question: '1 + 1 =',
          category_id: 3,
        }, 
        {
          question: 'How many wheels an airplane have',
          category_id: 3,
        }


      ]);
    });
};