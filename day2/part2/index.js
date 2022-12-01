const day2part2 = (input) => {

    let array = input.split("x");

    array= array.map(a=>{
        return Number(a)
    })
    
    let max = Math.max(array[0], array[1], array[2]);

   newArray= array.filter(a=>{
     return   a!==max
    });

    return  2*newArray[0]+2*newArray[1]+array[0]*array[1]*array[2]
}

module.exports = {
    day2part2,
}