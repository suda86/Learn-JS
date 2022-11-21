const { challengeDay1Part2 } = require(".");

describe('Test challenge day 1 part 2', () => {
    test('Challenge day 1 patr 2', () => {
       const underTest =  challengeDay1Part2()

       expect(underTest).toBe(1771)
    });
});