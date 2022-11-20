const day5part1 = (input) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const forbidenStrings = ['ab', 'cd', 'pq', 'xy']

    let hasVowels = 0
    let duble = false
    if (forbidenStrings.some((el) => input.indexOf(el) !== -1)) return false;

    for(let i = 0; i < input.length; i++) {
        if (vowels.includes(input[i])) {
            hasVowels ++;
        }

        if (!duble) {
            duble = input.includes(`${input[i]}${input[i]}`)
        }

        if (duble && hasVowels > 2) return true
    }

    return false;
}

module.exports = {
    day5part1,
}