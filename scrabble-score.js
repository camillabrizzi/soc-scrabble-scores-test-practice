export function calculateScrabbleScore(word) {
  if (word === "A" || word === "E" || word === "I" || word === "L") return 1;
  if (word === "D" || word === "G") return 2;
  if (word === "B" || word === "C" || word === "M") return 3;
  if (word === "F" || word === "H") return 4;
  if (word === "J") return 8;
  if (word === "K") return 5;
 
}
