const { day3part3 } = require(".");

describe('Test day 3 part 1', () => {
    test('should return correct ansver for ^v', () => {
        const underTest = day3part3('^v')

        expect(underTest).toBe(1)
    });

    test('should return correct ansver for ^>v<', () => {
        const underTest = day3part3('^>v<')

        expect(underTest).toBe(1)
    });

    test('should return correct ansver for ^v^v^v^v^v', () => {
        const underTest = day3part3('^v^v^v^v^v')

        expect(underTest).toBe(0)
    });
});