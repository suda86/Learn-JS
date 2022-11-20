const { day5part1 } = require(".");

describe('Day 5 part 1', () => {
    test('should return correct response for ugknbfddgicrmopn', () => {
        const underTest = day5part1('ugknbfddgicrmopn')
        
        expect(underTest).toBeTruthy();
    });

    test('should return correct response for aaa', () => {
        const underTest = day5part1('aaa')
        
        expect(underTest).toBeTruthy();
    });

    test('should return correct response for jchzalrnumimnmhp', () => {
        const underTest = day5part1('jchzalrnumimnmhp')
        
        expect(underTest).not.toBeTruthy();
    });

    test('should return correct response for haegwjzuvuyypxyu', () => {
        const underTest = day5part1('haegwjzuvuyypxyu')
        
        expect(underTest).not.toBeTruthy();
    });

    test('should return correct response for dvszwmarrgswjxmb', () => {
        const underTest = day5part1('dvszwmarrgswjxmb')
        
        expect(underTest).not.toBeTruthy();
    });
});