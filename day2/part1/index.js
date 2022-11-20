const day2part1 = (input) => {
    const [x, y, z] = input.split('x');
    const part1 = x * y;
    const part2 = x * z;
    const part3 = z * y;
    const min = Math.min(part1, part2, part3)

    return 2*part1 + 2*part2 + 2*part3 + min;
}

module.exports = {
    day2part1,
}