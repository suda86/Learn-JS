const md5 = require('md5');

const day4part1 = (input, responseStartWith = '000000') => {
    let counter = 0;

    while (true) {
        const hash = md5(`${input}${counter}`)

        if (hash.startsWith(responseStartWith)) {
            return counter
        }

        counter++
    }
}

module.exports = {
    day4part1,
}