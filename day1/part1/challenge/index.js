const fs = require('fs')
const path = require('path')
const { day1Part1 } = require('..')

const challengeDay1Part1 = () => {
    const filePath = path.resolve(__dirname, './input.txt')

    const input = fs.readFileSync(filePath, {encoding:'utf8'})

    const result = day1Part1(input)

    return result
}

module.exports = {
    challengeDay1Part1,
}