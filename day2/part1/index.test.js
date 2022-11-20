const { day2part1 } = require(".");

describe('Test day 2 part 1', () => {
    test('return correct response for 2x3x4', () => {
        const underTest = day2part1('2x3x4')
        expect(underTest).toBe(58)
    });

    test('return correct response for 1x1x10', () => {
        const underTest = day2part1('1x1x10')
        expect(underTest).toBe(43)
    });
    
});