let finalObject = {};

function countLetters(input) {
  input = splitLetters(input)
  // return input
  for (let i = 0; i < input.length; i++) {
    if (finalObject[input[i]] == undefined) {
      finalObject[input[i]] = 1
    } else {
      finalObject[input[i]] += 1
    }
  }
  return finalObject
}

// for loop, each letter in the array
// if else, if character exists +1 to value, else attribute value = 1

function noSpace(oginput) {
  oginput = oginput.split(' ').join('');
  return oginput;
}

function splitLetters(newinput) {
  newinput = noSpace(newinput)
  newinput = newinput.split('')
  return newinput
}

console.log(countLetters("lighthouse in the house"))
// console.log(finalObject)
// console.log(noSpace("lighthouse in the house"))
// console.log(splitLetters("lighthouse in the house"))
