const day3part2 = (input) => {

    let inp = [...input]
    let gift = 1;
    let matrix = [];

    let inp1 = inp.filter((el, index) => index % 2 === 0);
    let inp2 = inp.filter((el, index) => index % 2 !== 0);

    let x1 = inp1.length;
    let y1 = inp1.length
    let x2 = inp1.length;
    let y2 = inp1.length

    function makeMatrix() {
        for (let i = 0; i < (inp1.length * 2 + 1); i++) {
            matrix.push([])
            for (let j = 0; j < (inp1.length * 2 + 1); j++) {
                matrix[i].push(1)
            }
        }
    }

    function addGift(array, x, y) {
        array.forEach(e => {
            matrix[x][y] = 0
            if (e === ">") {
                gift += matrix[x][y + 1]
                matrix[x][y + 1] = 0
                y++
            } else if (e === "<") {
                gift += matrix[x][y - 1]
                matrix[x][y - 1] = 0
                y--
            } else if (e === "^") {
                gift += matrix[x - 1][y]
                matrix[x - 1][y] = 0
                x--
            } else {
                gift += matrix[x + 1][y]
                matrix[x + 1][y] = 0
                x++
            }
        })
    }

    makeMatrix()
    addGift(inp1, x1, y1)
    addGift(inp2, x2, y2)

    return gift;

}

module.exports = {
    day3part2,
}