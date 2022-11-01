# Test driven development

This is the repo for a School of Code session on test driven development (TDD). The resources section at the bottom of this README contains videos/articles that might be helpful for an overview of TDD.

The end goal is to create a `calculateScrabbleScore` function that calculates a scrabble score for a given word and returns the calculated score.

- Your tests will go in `scrabble-score.test.js`.
- Your implementation will go in `scrabble-score.js`. If you look there, a basic skeleton for the function has already been created and exported for you.

The scores for each letter are as follows:

| Letter | Score |
| ------ | ----- |
| A      | 1     |
| B      | 3     |
| C      | 3     |
| D      | 2     |
| E      | 1     |
| F      | 4     |
| G      | 2     |
| H      | 4     |
| I      | 1     |
| J      | 8     |
| K      | 5     |
| L      | 1     |
| M      | 3     |
| N      | 1     |
| O      | 1     |
| P      | 3     |
| Q      | 10    |
| R      | 1     |
| S      | 1     |
| T      | 1     |
| U      | 1     |
| V      | 4     |
| W      | 4     |
| X      | 8     |
| Y      | 4     |
| Z      | 10    |

To give a couple of examples of how this table works:

- The word `I` would be worth 1 point (`I -> 1`)
- The word `ICED` would be worth 7 points (`I C E D -> 1 + 3 + 1 + 2`)

We'll keep extending the functionality in small increments.

**Remember the discipline:** Write the simplest and minimal test for a failing test case. Then write the simplest and minimal code/implementation to pass the failing test. Don't read ahead, don't try to predict what the code might need later.

## Ticket 1 - single letters only

1. Write a new test that checks whether `calculateScrabbleScore` correctly calculates the score for the word `A`.
   - Once you've written the test, try running the test script via `npm run test` (or `npm t` for short) in your terminal.
   - You should see the test (that you've just written) fail because the test has been written before the implementation (as is the case in TDD).
   - This is the "red" stage in the TDD cycle (red -> green -> refactor)
2. Now write the least amount of code you can within `calculateScrabbleScore` to pass the failing test case (in other words, make `calculateScrabbleScore` return the correct score for the word `A`).
   - Once you've updated the implementation, try running the test script again.
   - You should now see the test pass (if your implementation is correct).
   - This is the "green" stage in the TDD cycle (red -> green -> refactor)
3. Refactor the implementation/tests where/if needed.
   - This is the "refactor" stage in the TDD cycle (red -> green -> refactor)
4. Now repeat steps 1-3 for the remaining single letter words (i.e. `B`, `C`, `D` and so forth up to and including `Z`).

   - Remember the process:

     - Add one test (which should fail) for a single letter word
     - Update the implementation (to make the failing test pass)
     - Refactor where/if needed.
     - Then on to the next single letter word

   - **Optional:** These steps will probably involve a lot of repetition. Optionally, have a look at the `.each` method from Jest ([docs](https://jestjs.io/docs/api#testeachtablename-fn-timeout)), which can be a handy way to reduce/avoid repetition when writing tests. See if you can read through the examples in the documentation to understand how `.each` can be used -- and then try to apply what you're seeing in the examples to your own code. Have a look on the internet (e.g. articles, blogs, YouTube videos, etc.) for resources that might help. If you spend too much time on getting `.each` to work, write the tests for the single letter words without it (even if it means you have repetition).

**Remember the discipline of writing the minimal amount of code to meet the current requirements.** Your implementation should only handle single letter words at the end of this stage.

## Ticket 2 - multiple letters

1. Write a new test for a word that has more than one letter. The choice of word is up to you and you'll need to figure out the correct score for it. The test should currently fail.
2. Update the implementation to make the failing test pass. The implementation will now start to get more complex.
3. Refactor where/if needed.
4. Repeat steps 1-3 for several other words which have more than one letter. Which words you choose is up to you.

## Ticket 3 - input validation

1. Write a new test to ensure the function throws an error if any of the characters in the word given are outside of A-Z. You can use `.toThrow` ([Jest docs](https://jestjs.io/docs/expect#tothrowerror)) to catch and check the error. The test should currently fail.

2. Update the implementation to make the failing test pass. You can use the `throw` statement in JS to deliberately throw/cause an error: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw#description

3. Refactor where/if needed.

## Ticket 4 - bonus score

A new requirement has come in.

> If a player uses all seven tiles, they should score a bonus of 50 points on top of the word score.

Go through the TDD process (write a failing test -> update the implementation so that the test passes -> refactor where/if needed) to support/meet this requirement.

## Ticket 5 - case insensitivity

A new requirement has come in.

> The function should support both uppercase and lowercase letters, and score correctly. The lowercase letters have the same values as their uppercase equivalents.

Go through the TDD process (write a failing test -> update the implementation so that the test passes -> refactor where/if needed) to support/meet this requirement.

## Resources

Some resources on TDD:

- [Video on TDD](https://www.youtube.com/watch?v=Jv2uxzhPFl4)
- [Article on TDD](https://www.ibm.com/garage/method/practices/code/practice_test_driven_development/)
- [Another article on TDD](https://www.browserstack.com/guide/what-is-test-driven-development)
