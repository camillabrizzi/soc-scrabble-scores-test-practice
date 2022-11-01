export function calculateScrabbleScore(word) {
  let score = 0;
  if (
    word === "A" ||
    word === "E" ||
    word === "I" ||
    word === "L" ||
    word === "N" ||
    word === "O" ||
    word === "R" ||
    word === "S" ||
    word === "T" ||
    word === "U"
  )
    score += 1;
  if (word === "D" || word === "G") score += 2;
  if (word === "B" || word === "C" || word === "M" || word === "P") score += 3;
  if (
    word === "F" ||
    word === "H" ||
    word === "V" ||
    word === "W" ||
    word === "Y"
  )
    score += 4;

  if (word === "J" || word === "X") score += 8;
  if (word === "K") score += 5;
  if (word === "Q" || word === "Z") score += 10;

  return score;
}
