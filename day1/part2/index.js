const day1Part2 = (input) => {
    let result = 0
    const index = input.split('').findIndex((element) => {
        let changer = 0;

        if (element === '(') {
            changer = 1;
        } else if (element === ')') {
            changer = -1;
        }

        result += changer;

        if (result < 0) {
            return true
        }

        return false;
    });

    return index + 1
}

module.exports = {
    day1Part2,
}