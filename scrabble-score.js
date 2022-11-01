// export function calculateScrabbleScore(word) {
//   let score = 0;
//   for (let char of word) {
//     if (
//       char === "A" ||
//       char === "E" ||
//       char === "I" ||
//       char === "L" ||
//       char === "N" ||
//       char === "O" ||
//       char === "R" ||
//       char === "S" ||
//       char === "T" ||
//       char === "U"
//     )
//       score += 1;
//     if (char === "D" || char === "G") score += 2;
//     if (char === "B" || char === "C" || char === "M" || char === "P") score += 3;
//     if (
//       char === "F" ||
//       char === "H" ||
//       char === "V" ||
//       char === "W" ||
//       char === "Y"
//     )
//       score += 4;
  
//     if (char === "J" || char === "X") score += 8;
//     if (char === "K") score += 5;
//     if (char === "Q" || char === "Z") score += 10;
  
//   }
  
//   return score;
// }

const scrabbleLetters = {
  A : 1,
  B : 3,
  C : 3,
  D : 2,
  E: 1,
  F : 4,
  G : 2,
  H : 4,
  I : 1,
  J : 8,
  K : 5,
  L : 1,
  M : 3,
  N : 1,
  O : 1,
  P : 3,
  Q : 10,
  R : 1,
  S : 1,
  T : 1,
  U : 1,
  V : 4,
  W : 4,
  X : 8,
  Y : 4,
  Z : 10
}

export function calculateScrabbleScore(word) {
  let score = 0;
  for (let char of word) {
    for (let letter in scrabbleLetters) {
      if (char === letter) score += scrabbleLetters[letter]
    }
  }
  return score;
}

calculateScrabbleScore("CAR")

//this refactored version passed all tests!