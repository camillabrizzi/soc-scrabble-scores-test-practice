export function calculateScrabbleScore(word) {
  let score = 0;
  for (let char of word) {
    if (
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "L" ||
      char === "N" ||
      char === "O" ||
      char === "R" ||
      char === "S" ||
      char === "T" ||
      char === "U"
    )
      score += 1;
    if (char === "D" || char === "G") score += 2;
    if (char === "B" || char === "C" || char === "M" || char === "P") score += 3;
    if (
      char === "F" ||
      char === "H" ||
      char === "V" ||
      char === "W" ||
      char === "Y"
    )
      score += 4;
  
    if (char === "J" || char === "X") score += 8;
    if (char === "K") score += 5;
    if (char === "Q" || char === "Z") score += 10;
  
  }
  
  return score;
}

//not liking for of loops for some reason!

