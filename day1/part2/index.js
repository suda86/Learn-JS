const day1Part2 = (input) => {
  // pretvaramo u niz input
  // otvorim promenjivu suma da sabira elemente niza
  //())()((

  const array = [...input];
  //   let newArray = [];
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    array[i] === "(" ? suma++ : suma--;
    console.log(i);

    if (suma === -1) {
      return i + 1;
      //   newArray.push(array[i]);
    }
    // else {
    //   newArray.push(array[i]);

    //   break;
    // }
  }
  //   return newArray.length;
};

module.exports = {
  day1Part2,
};
