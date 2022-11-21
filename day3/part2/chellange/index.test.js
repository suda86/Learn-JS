const { day3part2Chellange } = require(".");

describe('Test day 3 part 2 chellange', () => {
    test('Test day 3 part 2 chellange', () => {
        const underTest = day3part2Chellange()

        expect(underTest).toBe(2360)
    });
});