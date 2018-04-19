function toWords(sentence) {
  if(sentence !== undefined){
  const allWords = sentence.split(/[.?!, :]+/);
  return allWords.filter(word => word !== "");
  }
  return null;
}

console.log(toWords("Lorem.? !,:[] Ipsum?"));
module.exports = toWords;
