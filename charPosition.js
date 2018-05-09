function countLetters(input) {
  let finalObject = {};
  input = splitLetters(input)
  for (let i = 0; i < input.length; i++) {
    if (input[i] == ' ') {
      continue
    } else if (finalObject[input[i]] === undefined) {
      finalObject[input[i]] = i
    } else {
      finalObject[input[i]] += ', ' + i
    }
  }
  return finalObject
}
// function countLetters(input) {
//   input = splitLetters(input)
//   for (let i = 0; i < input.length; i++) {
//     if (finalObject[input[i]] === undefined) {
//       finalObject[input[i]] = i
//     } else {
//       finalObject[input[i]] += ', ' + i
//     }
//   }
//   return finalObject
// }

function noSpace(oginput) {
  oginput = oginput.split(' ').join('');
  return oginput;
}

function splitLetters(newinput) {
  // newinput = noSpace(newinput)
  newinput = newinput.split('')
  return newinput
}

//including spaces n in position 12, i should be in position 1 and 11
console.log(countLetters("lighthouse in the house"))
// console.log(countLetters("zyx zzzzz"))
// console.log(countLetters("lighthouse in the house"))
// console.log(finalObject)
// console.log(noSpace("lighthouse in the house"))
// console.log(splitLetters("lighthouse in the house"))