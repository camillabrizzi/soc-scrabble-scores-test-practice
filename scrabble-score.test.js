import { calculateScrabbleScore } from "./scrabble-score";

// List of matchers (expects) for jest:
// https://jestjs.io/docs/using-matchers

//ticket 1

test("checks calculateScrabbleScore when A is passed in the number 1 is returned", () => {
  let word = "";
  const calculateScore = calculateScrabbleScore(word);
  if (word === "A" || word === "E") {
    expect(calculateScore.toBe(1));
  } else if (word === "B" || word === "C") {
    expect(calculateScore.toBe(3));
  } else if (word === "D" || word === "G") {
    expect(calculateScore.toBe(2));
  } else if (word === "F") {
    expect(calculateScore.toBe(4));
  }
});

// test("checks calculateScrabbleScore when B is passed in the number 3 is returned", () => {
//   const actual = calculateScrabbleScore("B");
//   const expected = 3;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when C is passed in the number 3 is returned", () => {
//   const actual = calculateScrabbleScore("C");
//   const expected = 3;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when D is passed in the number 2 is returned", () => {
//   const actual = calculateScrabbleScore("D");
//   const expected = 2;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when E is passed in the number 1 is returned", () => {
//   const actual = calculateScrabbleScore("E");
//   const expected = 1;
//   expect(actual).toBe(expected);
// });
