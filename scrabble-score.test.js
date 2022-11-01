import { calculateScrabbleScore } from "./scrabble-score";

//TICKET 1 - REFACTORED - single letters

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



//TICKET 2 - whole words

test("Letters joins together to make a CAR then score of each letter is added up to 5", () => {
  const actual = calculateScrabbleScore("ART");
  const expected = 3;
  expect(actual).toBe(expected);
});

// TICKET 3 - input validation

test("calculateScrabbleScore should throw an error if characters are not within A-Z range", () => {
  const char = "£"
  const actual = () => calculateScrabbleScore(char);
  expect(actual).toThrow("Make sure you only use capital letters A-Z");
 });

// TICKET 4 - bonus score

 test("If a word is 7+ in length, 50 points will be added to the score", () => {
  const actual = calculateScrabbleScore("IMAGINATION");
  const expected = 50;
  expect(actual).toBeGreaterThan(expected);
 });

 // TICKET 5 - case insensitivity

 test("If the word passed into the calculateScrabbleScore function contains lower-case letters, scores will be added in for those letters as normal", () => {
  const actual = calculateScrabbleScore("arT");
  const expected = 3;
  expect(actual).toBe(expected);
 });