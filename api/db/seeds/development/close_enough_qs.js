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
          question: 'Jacobite Cruises purchased unusual insurance to protect it from damage caused by _____.',
          answer: 'THE LOCH NESS MONSTER',
        },
        {
          question: 'The sound of E.T. walking was made by someone squishing _____.',
          answer: 'JELL-O',
        },
        {
          question: 'Oddly enough, Albert Einstein\'s eyeballs can be found in a _____ in New York City.',
          answer: 'SAFE DEPOSIT BOX',
        },
        {
          question: 'In 2013, a wealthy Michagan man bought the house next to his ex -wife and erected a giant bronze statue of a _____.',
          answer: 'MIDDLE FINGER',
        },
        {
          question: 'For $180, the Shizuka New York skin care salon offeres the unusual but traditional Japanese facial that is part rice bran and part _____.',
          answer: 'BIRD POOP',
        },
        {
          question: 'The name for a group of porcupines.',
          answer: 'PRICKLE',
        },
        {
          question: 'The name of the dog that won the 2012 World\'s Ugliest Dog Competition.',
          answer: 'MUGLY',
        },
        {
          question: 'The original name for the search engine that became Google.',
          answer: 'BACKRUB',
        },
        {
          question: 'Miley Cyrus\'s real first name.',
          answer: 'DESTINY',
        },
        {
          question: 'In 1976 boxing legend Muhammad Ali released an education children\'s album titled "Ali and His Gang Vs. Mr. _____."',
          answer: 'TOOTH DECAY',
        },
        {
          question: 'On January 13, 2014, U.S. Secretary of State John Kerry presented to Russian Foreign Minister Sergei Lavrow the odd gift of two very large _____.',
          answer: 'POTATOES',
        },
        {
          question: 'Huggies Brazil developed a phone app that tells you when a baby\'s diaper is wet. The app is called _____.',
          answer: 'TWEETPEE',
        },
        {
          question: 'Tashirojima is an island off of Japan that is complete overrun by _____.',
          answer: 'CATS',
        },
        {
          question: 'In 2003, Morocco made the highly unusual offer to send 2,000 _____ to assist the United States\'war efforts in Iraq.',
          answer: 'MONKEYS',
        },
        {
          question: 'In 2007, to make a point, Nebraskain State Sen. Ernie Chambers filed a frivolous lawsuit against _____.',
          answer: 'GOD',
        },
        {
          question: 'In 2009, a Russian man shocked the medical world when it was discovered he had a 5 centimeter long _____ growing in his lung.',
          answer: 'TREE BRANCH',
        },
        {
          question: 'Moviegoers who use their cell phones at the Prince Charles Cinema in London are escorted out by people dressed as ____.',
          answer: 'NINJAS',
        },
        {
          question: 'Over the course of 35 years, artist Scott Weaver has built a replica of the city of San Francisco using over 100,000 ______.',
          answer: 'TOOTHPICKS',
        }


      ]);
    });
};