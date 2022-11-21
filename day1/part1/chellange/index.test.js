const { challengeDay1Part1 } = require(".");

describe('Test challenge day 1 part 1', () => {
    test('Challenge day 1 patr 1', () => {
       const underTest =  challengeDay1Part1()

       expect(underTest).toBe(138)
    });
});