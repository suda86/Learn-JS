const { day1Part1 } = require('./index')

describe('Test Day 1 part 1', () => {
    test('Correct output for (())', () => {
        const underTest = day1Part1('(())')
        expect(underTest).toBe(0)
    });


    test('Correct output for ()()', () => {
        const underTest = day1Part1('()()')
        expect(underTest).toBe(0)
    });

    test('Correct output for (((', () => {
        const underTest = day1Part1('(((')
        expect(underTest).toBe(3)
    });

    test('Correct output for (()(()(', () => {
        const underTest = day1Part1('(()(()(')
        expect(underTest).toBe(3)
    });

    test('Correct output for ))(((((', () => {
        const underTest = day1Part1('))(((((')
        expect(underTest).toBe(3)
    });

    test('Correct output for ())', () => {
        const underTest = day1Part1('())')
        expect(underTest).toBe(-1)
    });

    test('Correct output for ))(', () => {
        const underTest = day1Part1('))(')
        expect(underTest).toBe(-1)
    });
    test('Correct output for )))', () => {
        const underTest = day1Part1(')))')
        expect(underTest).toBe(-3)
    });
    test('Correct output for )())())', () => {
        const underTest = day1Part1(')())())')
        expect(underTest).toBe(-3)
    });
});