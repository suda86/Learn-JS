const day3part1 = (input) => {
    let maxX = 0
    let minX = 0
    let maxY = 0
    let minY = 0
    let x = 0
    let y = 0

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case '>':
                x += 1
                if (x > maxX) maxX = x
                break;

            case '<':
                x -= 1
                if (x < minX) minX = x
                break;

            case '^':
                y += 1
                if (y > maxY) maxY = y
                break;
            case 'v':
                y -= 1
                if (y < minY) minY = y
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
    schema[currentXPossition][currentYPossition] = 1;
    let visitedHouses = 1;
    
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case '>':
                currentXPossition += 1
                break

            case '<':
                currentXPossition -= 1
                break

            case '^':
                currentYPossition += 1
                break
            case 'v':
                currentYPossition -= 1
                break
        
            default:
                break;
        } 

        if (!schema[currentXPossition][currentYPossition]) visitedHouses++;
        schema[currentXPossition][currentYPossition] += 1
    }

    return visitedHouses;
}

module.exports = {
    day3part1,
}