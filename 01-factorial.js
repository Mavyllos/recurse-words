/*
  Write a function called `factorial` that returns the
  facorial of any inputted number. For example:
  4! = 4 * 3 * 2 * 1 = 24
*/

const studentCount = 19

function factorial (num) {
  if (num !== 1) {
    return num * factorial(num - 1)
  } else {
    return 1
  }
}

console.log(factorial(studentCount))
