const { day3part1Chellange } = require(".");

describe('Test day 3 part 1 chellange', () => {
    test('Test day 3 part 1 chellange', () => {
        const underTest = day3part1Chellange()

        expect(underTest).toBe(2592)
    });
});