const day2part2 = (input) => {
    const inputs = input.split('x');
    const max = Math.max(...inputs);

    let [a, b] = inputs.filter(el => el < max)

    if (!a) a = max;
    if (!b) b = max;

    return Number(a) + Number(a) + Number(b) + Number(b) + (a * b * max)
}

module.exports = {
    day2part2,
}