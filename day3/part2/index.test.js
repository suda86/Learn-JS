const { day3part2 } = require(".");

describe('Test day 3 part 1', () => {
    test('should return correct ansver for ^v', () => {
        const underTest = day3part2('^v')

        expect(underTest).toBe(3)
    });

    test('should return correct ansver for ^>v<', () => {
        const underTest = day3part2('^>v<')

        expect(underTest).toBe(3)
    });

    test('should return correct ansver for ^v^v^v^v^v', () => {
        const underTest = day3part2('^v^v^v^v^v')

        expect(underTest).toBe(11)
    });
});