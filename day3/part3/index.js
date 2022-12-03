const day3part3 = (input) => {

    let inp = [...input]
    
    let matrix = [];
    let x = inp.length;
    let y = inp.length

    function makeMatrix() {
        for (let i = 0; i < (inp.length * 2 + 1); i++) {
            matrix.push([])
            for (let j = 0; j < (inp.length * 2 + 1); j++) {
                matrix[i].push(0)
            }
        }

    }

    makeMatrix()

    inp.forEach(e => {
        matrix[x][y] = 1
        if (e === ">") {
            
            matrix[x][y + 1] += 1
            y++
            return matrix[x][y] 
        } else if (e === "<") {
            matrix[x][y - 1] += 1
            y--
            return  matrix[x][y]
        } else if (e === "^") {
            // console.log(matrix[x - 1][y]+ "^")
            // console.log(matrix[x - 1][y]+ "^")
            matrix[x - 1][y] ++
            // console.log(matrix[x - 1][y]+ "^")
            x--
            return matrix[x][y] 
        } else {
            // console.log(matrix[x + 1][y] +"v")
            matrix[x + 1][y] ++
            // console.log(matrix[x + 1][y] +"v")
            x++
            return matrix[x][y] 
        }
    })



    let array = [].concat(...matrix);
    let numberHouseWithTwoGift = array.filter(arr=>arr===2)


    
    
    return numberHouseWithTwoGift.length


}

module.exports = {
    day3part3,
}