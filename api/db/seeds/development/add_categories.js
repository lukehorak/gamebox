
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([

        {id: 1, title: 'Gimme a hand', description: "Time for a minor shoulder workout. Put those  hands up if you wanna win win win! Or don't. Depends on the question. The faker will be trying their best to be a social chameleon of sorts. Spot the person who doesn't quite blend in and vote for them unanimously to win the game.", prefix: "Raise your hand if " },
        
        {id: 2, title: 'Get to the point', description: "Haven't you ever heard that it's rude to point? Yeah, well, that doesn't apply around these parts. Use those arms of yours to respond to the question as best you can. The faker is among you. Find them. Capture them. No, just joking. Just vote for that person unanimously to win the game!", prefix: "Point at the person who " },
    
        {id: 3, title: 'Count me in!', description: "Using the fingers on your hands, respond to the questions as best as you can. The faker's goal, as always, is to blend in as best as possible so be on the lookout for that friend of yours who seems a little lost. Vote for the faker at the end of each round, the vote must be unanimous for the faker to be caught!",  prefix: "By a show of fingers, "}

      ]);
    });
};
