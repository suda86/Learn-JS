const { day4part1 } = require(".");

describe('Test day 4', () => {
    // test('Should return correct response for input for 00000', () => {
    //     const underTest = day4part1('ckczppom', '00000')

    //     expect(underTest).toBe(117946)
    // });

    // test('Should return correct response for input', () => {
    //     const underTest = day4part1('ckczppom', '000000')

    //     expect(underTest).toBe(3938038)
    // });

    test('Should return correct response for input', () => {
        const underTest = day4part1('sasa', '0')

        expect(underTest).toBe(5)
    });
});