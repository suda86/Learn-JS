const day3part2 = (input) => {

    let inp = [...input]
    let gift = 0;
    let matrix = [];
    
    let inp1 = inp.filter((el, index) => index % 2  === 0);
    let inp2 = inp.filter((el, index) => index % 2  !== 0);
    
    
    
    function makeMatrix(array){

        let x = inp1.length;
        let y = inp1.length

        for (let i = 0; i < (array.length * 2 + 1); i++) {
            matrix.push([])
            for (let j = 0; j < (array.length * 2 + 1); j++) {
                matrix[i].push(1)
            }
        }
    
    }

    function  addGift(array ){

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

    makeMatrix(inp1)    
    makeMatrix(inp2)    

    addGift(inp1)
    addGift(inp2)

    
    return gift
    
}

module.exports = {
    day3part2,
}