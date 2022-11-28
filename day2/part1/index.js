const day2part1 = (input) => {
  //   console.log([...input]);

  const newArray = input.split("x");

  console.log(newArray);
  let nam1 = parseInt(newArray[0] * newArray[1]);
  //   console.log(nam1);
  let nam2 = parseInt(newArray[1] * newArray[2]);
  //   console.log(nam2);
  let nam3 = parseInt(newArray[2] * newArray[0]);
  //   console.log(nam3);
  let min = Math.min(nam1, nam2, nam3);

  return 2 * nam1 + 2 * nam2 + 2 * nam3 + min;
};

module.exports = {
  day2part1,
};
