const day3part3 = (input) => {

    let inp = [...input]
    // let numberHouseWithTwoGift = [];
    let matrix = [];
    let x = inp.length;
    let y = inp.length

    function makeMatrix() {
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

            if (matrix[x][y + 1] === 0) {
                matrix[x][y + 1] = true
                y++
            } else if (matrix[x][y + 1] === true) {
                matrix[x][y + 1] = false
                y++
            } else if (matrix[x][y + 1] === false) {
                matrix[x][y + 1] = false
                y++
            } else {
                matrix[x][y + 1] = 0
                y++
            }

        } else if (e === "<") {

            if (matrix[x][y - 1] === 0) {
                matrix[x][y - 1] = true
                y--
            } else if (matrix[x][y - 1] === true) {
                matrix[x][y - 1] = false
                y--
            } else if (matrix[x][y - 1] === false) {
                matrix[x][y - 1] = false
                y--
            }
            {
                matrix[x][y - 1] = 0
                y--
            }
        } else if (e === "^") {

            if (matrix[x - 1][y] === 0) {
                matrix[x - 1][y] = true
                x--
            } else if (matrix[x - 1][y] === true) {
                matrix[x - 1][y] = false
                x--
            } else if (matrix[x - 1][y] === false) {
                matrix[x - 1][y] = false
                x--
            } else {
                matrix[x - 1][y] = 0
                x--
            }
        } else if (matrix[x - 1][y] === false) {
            matrix[x - 1][y] = false
            x--
        } else {

            if (matrix[x + 1][y] === 0) {
                matrix[x + 1][y] = true
                x++
            } else if (matrix[x + 1][y] === true) {
                matrix[x + 1][y] = false
                x++
            } else if (matrix[x + 1][y] === false) {
                matrix[x + 1][y] = false
                x++
            } else {
                matrix[x + 1][y] = 0
                x++
            }
        }
    })// [
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1],    ar[,]
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 0, 1, 1, 1, 1],
    //     [1, 1, 1, 1, tr, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1]
    // ]

    let numberHouseWithTwoGift = matrix.filter(tr => tr === true)

    console.log("*******************************");
    // console.log(matrix);
    console.log(matrix);

    return numberHouseWithTwoGift.length


}

module.exports = {
    day3part3,
}