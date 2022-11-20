const fs = require('fs')
const path = require('path')
const { day3part1 } = require('..')

const filePath = path.resolve(__dirname, './input.txt')

const input = fs.readFileSync(filePath, {encoding:'utf8'})

const result = day3part1(input)

console.log(result)