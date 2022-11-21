const { day2part1Chellange } = require(".");

describe('Test challenge day 2 part 1', () => {
    test('Challenge day 2 patr 1', () => {
       const underTest =  day2part1Chellange()

       expect(underTest).toBe(1606483)
    });
});