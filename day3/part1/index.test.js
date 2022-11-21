const { day3part1 } = require(".");

describe('Test day 3 part 1', () => {
    test('should return correct ansver for >', () => {
        const underTest = day3part1('>')

        expect(underTest).toBe(2)
    });

    test('should return correct ansver for ^>v<', () => {
        const underTest = day3part1('^>v<')

        expect(underTest).toBe(4)
    });

    test('should return correct ansver for ^v^v^v^v^v', () => {
        const underTest = day3part1('^v^v^v^v^v')

        expect(underTest).toBe(2)
    });
});