/*
  Write a function that goes into a deeply nested array
  and returns the first non-Array value inside.
*/

const russianDoll = [[[[[[[[['🇷🇺']]]]]]]]]

function open (nested) {
  const item = nested[0]
  if (Array.isArray(item)) {
    return open(item)
  } else {
    return item
  }
}

console.log(open(russianDoll))
