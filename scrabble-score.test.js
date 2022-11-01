import { calculateScrabbleScore } from "./scrabble-score";

// test("checks calculateScrabbleScore when a letter is passed in the correct number is returned", () => {
//   const actual = calculateScrabbleScore("A");
//   const expected = 1;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when a letter is passed in the correct number is returned", () => {
//   const actual = calculateScrabbleScore("N");
//   const expected = 1;
//   expect(actual).toBe(expected);
// });

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

// test("checks calculateScrabbleScore when O is passed in the number 1 is returned", () => {
//   const actual = calculateScrabbleScore("O");
//   const expected = 1;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when P is passed in the number 3 is returned", () => {
//   const actual = calculateScrabbleScore("P");
//   const expected = 3;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when Q is passed in the number 10 is returned", () => {
//   const actual = calculateScrabbleScore("Q");
//   const expected = 10;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when R is passed in the number 1 is returned", () => {
//   const actual = calculateScrabbleScore("R");
//   const expected = 1;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when S is passed in the number 1 is returned", () => {
//   const actual = calculateScrabbleScore("S");
//   const expected = 1;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when T is passed in the number 1 is returned", () => {
//   const actual = calculateScrabbleScore("T");
//   const expected = 1;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when U is passed in the number 1 is returned", () => {
//   const actual = calculateScrabbleScore("U");
//   const expected = 1;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when V is passed in the number 4 is returned", () => {
//   const actual = calculateScrabbleScore("V");
//   const expected = 4;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when W is passed in the number 4 is returned", () => {
//   const actual = calculateScrabbleScore("W");
//   const expected = 4;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when Y is passed in the number 4 is returned", () => {
//   const actual = calculateScrabbleScore("Y");
//   const expected = 4;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when X is passed in the number 8 is returned", () => {
//   const actual = calculateScrabbleScore("X");
//   const expected = 8;
//   expect(actual).toBe(expected);
// });

// test("checks calculateScrabbleScore when Z is passed in the number 10 is returned", () => {
//   const actual = calculateScrabbleScore("Z");
//   const expected = 10;
//   expect(actual).toBe(expected);
// });


//TICKET 1 - REFACTORED

test.each([
  ["A", 1],
  ["B", 3],
  ["C", 3],
  ["D", 2],
  ["E", 1],
  ["F", 4],
  ["G", 2],
  ["H", 4],
  ["I", 1],
  ["J", 8],
  ["K", 5],
  ["L", 1],
  ["M", 3],
  ["N", 1],
  ["O", 1],
  ["P", 3],
  ["Q", 10],
  ["R", 1],
  ["S", 1],
  ["T", 1],
  ["U", 1],
  ["V", 4],
  ["W", 4],
  ["X", 8],
  ["Y", 4],
  ["Z", 10]
])('when %s is passed in return %i', (letter, expected) => {
  expect(calculateScrabbleScore(letter)).toBe(expected);
});



//TICKET 2
test("Letters joins together to make a CAR then score of each letter is added up to 5", () => {
  const actual = calculateScrabbleScore("CAR");
  const expected = 5;
  expect(actual).toBe(expected);
});
