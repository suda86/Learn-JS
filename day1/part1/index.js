function day1Part1(input) {
    return input.split('').reduce((acc, curr) => {
        if (curr === '(') {
            acc++;
            return acc;
        }

        if (curr === ')') {
            acc--;
            return acc
        }

        return acc;
    }, 0)
}

module.exports = {
    day1Part1,
}