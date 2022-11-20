const fs = require('fs')
const path = require('path')
const { day5part1 } = require('..')

const filePath = path.resolve(__dirname, './input.txt')

const input = fs.readFileSync(filePath, {encoding:'utf8'})

const inputs = input.split('\n')

const result = inputs.reduce((acc, curr) => {
    if (day5part1(curr)) {
        acc ++
    }

    return acc;
}, 0)

console.log(result)