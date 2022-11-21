const { day2part2Chellange } = require(".");

describe('Test challenge day 2 part 2', () => {
    test('Challenge day 2 patr 2', () => {
       const underTest =  day2part2Chellange()

       expect(underTest).toBe(3842356)
    });
})