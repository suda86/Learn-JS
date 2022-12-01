const { day2part2 } = require(".");

describe('Test day 2 part 2', () => {
    test('return correct response for 2x3x4', () => {
        const underTest = day2part2('2x3x4')
        expect(underTest).toBe(34)
    });

    test('return correct response for 1x1x10', () => {
        const underTest = day2part2('1x1x10')
        expect(underTest).toBe(14)
    });

    test('return correct response for 15x27x5', () => {
        const underTest = day2part2('15x27x5')
        expect(underTest).toBe(2065)
    });
});