const { day1Part2 } = require(".");

describe("Test day 1 part 2", () => {
  // test('Return correct answer for ()', () => {
  //     const underTest = day1Part2(')')

  //     expect(underTest).toBe(1)
  // });
  test("Return correct answer for ()())", () => {
    const underTest = day1Part2("()())((()))))");

    expect(underTest).toBe(5);
  });
});
