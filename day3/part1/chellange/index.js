const { day3Part1 } = require("../index")
const { readFileSync } = require('fs')
const path = require('path')

const day3part1Chellange = () => {
    const input = readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')

    return day3Part1(input)
}

module.exports = {
    day3part1Chellange,
}



// const { day1Part1 } = require("../index")
// const {readFileSync} = require('fs')
// const path = require('path')

// const challengeDay1Part1 = () => {
//     const input = readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')

//     return day1Part1(input)
// }

// module.exports = {
//     challengeDay1Part1,
// }