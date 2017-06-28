/*
  https://theconcourse.deadspin.com/rainbow-cake-recipe-inspires-comment-apocalypse-1592575661

  The internet is a dangerous place. Write a function that takes an
  array of words to censor. Return the original structure at the end.

  For example:
  Input: ['damn'], [{ id: 0, content: 'This is a damn good cake.', replies: [] }]
  Output: [{ id: 0, content: 'This is a **** good cake.', replies: [] }]
*/

const comments = [
  {
    id: 1,
    content: `Did I ever say I was a real baker? No, I didn't. You mf's on these comments are always trying to pick sh*t apart. Mind your damn business, I wasn't talking to you "A Baker". Now that's being rude!!`,
    replies: [
      {
        id: 2,
        content: `oh good GOD, it is a cake recipe site....take your "facebook balls" and your miserable personality out somewhere else....always a troll, I swear`,
        replies: []
      },
      {
        id: 3,
        content: `i agree that was unnecessary why do people have to come to sites and start arguments if u are not talking about what the subject is find some were else to run your mouth`,
        replies: [
          {
            id: 4,
            content: `You do realize your just did what you're complaining about right?`,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 5,
    content: `I appreciate the effort it took to put the cake up and I will be using this for my grandson`,
    replies: []
  }
]
