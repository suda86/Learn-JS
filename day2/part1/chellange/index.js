const {readFileSync} = require('fs')
const path = require('path')
const { day2part1 } = require('..')

const day2part1Chellange = () => {
    const input = readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')

    return day2part1(input)
}

module.exports = {
    day2part1Chellange,
}