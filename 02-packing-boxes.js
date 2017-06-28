/*
  Moving is such a pain. Recursively go through the
  outer array and return a new array where each item
  is on the same level. (i.e. flatten)
*/

const box = [['🔬',['⛸', '🏓', '🏉'], '📕', ['🎷'], '🔑'],[[]],'💡']

function unpack (box, result=[]) {
  box.forEach(item => {
    if (Array.isArray(item)) {
      unpack(item, result)
    } else {
      result.push(item)
    }
  })

  return result
}

console.log(unpack(box))
