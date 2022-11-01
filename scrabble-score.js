export function calculateScrabbleScore(word) {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "A" ||
      word[i] === "E" ||
      word[i] === "I" ||
      word[i] === "L" ||
      word[i] === "N" ||
      word[i] === "O" ||
      word[i] === "R" ||
      word[i] === "S" ||
      word[i] === "T" ||
      word[i] === "U"
    )
      score += 1;
    if (word[i] === "D" || word[i] === "G") score += 2;
    if (word[i] === "B" || word[i] === "C" || word[i] === "M" || word[i] === "P") score += 3;
    if (
      word[i] === "F" ||
      word[i] === "H" ||
      word[i] === "V" ||
      word[i] === "W" ||
      word[i] === "Y"
    )
      score += 4;
  
    if (word[i] === "J" || word[i] === "X") score += 8;
    if (word[i] === "K") score += 5;
    if (word[i] === "Q" || word[i] === "Z") score += 10;
  
  }
  
  return score;
}

//not liking for of loops for some reason!

