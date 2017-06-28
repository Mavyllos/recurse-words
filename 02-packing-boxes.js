/*
  Moving is such a pain. Recursively go through the
  outer array and return a new array where each item
  is on the same level. (i.e. flatten)
*/

const box = [['🔬',['⛸', '🏓', '🏉'], '📕', ['🎷'], '🔑'],[[]],'💡']

function unpack (box, i=0, result=[]) {
  const item = box[i]

  if (item) {
    (Array.isArray(item)) ? unpack(item, 0, result) : result.push(item)
    unpack(box, i+1, result)
  }

  return result
}

console.log(unpack(box))
