const day3part2 = (input) => {
    let maxX = 0
    let minX = 0
    let maxY = 0
    let minY = 0
    let x = 0
    let y = 0
    let a = 0
    let b = 0

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case '>':
                i % 2 === 0 ? x += 1 : a += 1
                if (x > maxX) maxX = x
                if (a > maxX) maxX = a
                break;

            case '<':
                i % 2 === 0 ? x -= 1 : a -= 1
                if (x < minX) minX = x
                if (a < minX) minX = a
                break;

            case '^':
                i % 2 === 0 ? y += 1 : b += 1
                if (y > maxY) maxY = y
                if (b > maxY) maxY = b
                break;
            case 'v':
                i % 2 === 0 ? y -= 1 : b -= 1
                if (y < minY) minY = y
                if (b < minY) minY = b
                break;
        
            default:
                break;
        }
    }

    const XLength = Math.abs(minX) + maxX + 1
    const YLength = Math.abs(minY) + maxY + 1

    const XStartPosition = Math.abs(minX)
    const YStartPosition = Math.abs(minY)

    const schema = Array(XLength).fill(null).map(() => Array(YLength).fill(0));

    let currentXPossition = XStartPosition;
    let currentYPossition = YStartPosition;
    let currentAPossition = XStartPosition;
    let currentBPossition = YStartPosition;

    schema[currentXPossition][currentYPossition] = 1;
    let visitedHouses = 1;

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case '>':
                if (i % 2 === 0) {
                    currentXPossition += 1;
                    if (!schema[currentXPossition][currentYPossition]) visitedHouses++;
                    schema[currentXPossition][currentYPossition] += 1 
                } else {
                    currentAPossition += 1;
                    if (!schema[currentAPossition][currentBPossition]) visitedHouses++;
                    schema[currentAPossition][currentBPossition] += 1 
                }
                
                break

            case '<':
                if (i % 2 === 0) {
                    currentXPossition -= 1;
                    if (!schema[currentXPossition][currentYPossition]) visitedHouses++;
                    schema[currentXPossition][currentYPossition] += 1 
                } else {
                    currentAPossition -= 1;
                    if (!schema[currentAPossition][currentBPossition]) visitedHouses++;
                    schema[currentAPossition][currentBPossition] += 1 
                }
                
                break

            case '^':
                if (i % 2 === 0) {
                    currentYPossition += 1;
                    if (!schema[currentXPossition][currentYPossition]) visitedHouses++;
                    schema[currentXPossition][currentYPossition] += 1 
                } else {
                    currentBPossition += 1;
                    if (!schema[currentAPossition][currentBPossition]) visitedHouses++;
                    schema[currentAPossition][currentBPossition] += 1 
                }

                break
            case 'v':
                if (i % 2 === 0) {
                    currentYPossition -= 1;
                    if (!schema[currentXPossition][currentYPossition]) visitedHouses++;
                    schema[currentXPossition][currentYPossition] += 1 
                } else {
                    currentBPossition -= 1;
                    if (!schema[currentAPossition][currentBPossition]) visitedHouses++;
                    schema[currentAPossition][currentBPossition] += 1 
                }

                break
        
            default:
                break;
        } 
    }

    return visitedHouses;
}

module.exports = {
    day3part2,
}