const day3part1 = (input) => {
    let inp = [...input]
    let gift = 1;
    let matrix = [];
    let x = inp.length;
    let y = inp.length

    function makeMatrix(){
        for (let i = 0; i < (inp.length * 2 + 1); i++) {
            matrix.push([])
            for (let j = 0; j < (inp.length * 2 + 1); j++) {
                matrix[i].push(1)
            }
        }
    
    }

    makeMatrix()    

    inp.forEach(e => {
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
    return gift

}

module.exports = {
    day3part1,
}