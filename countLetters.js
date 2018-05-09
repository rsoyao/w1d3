let finalObject = {

}


function countLetters(input) {
  input = splitLetters(input)
  return input
}

function noSpace(ogInput) {
  ogInput = ogInput.split(" ").join('');

  return ogInput;
}

function splitLetters(newInput) {
  newInput = noSpace(newInput)
  newInput = newInput.split('')
  return newInput
}


console.log(countLetters("lighthouse in the house"));

