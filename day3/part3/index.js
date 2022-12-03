const day3part3 = (input) => {
  let inp = [...input];

  let matrix = [];
  let x = inp.length;
  let y = inp.length;
  let numberGift = 2;

  function makeMatrix() {
    for (let i = 0; i < inp.length * 2 + 1; i++) {
      matrix.push([]);
      for (let j = 0; j < inp.length * 2 + 1; j++) {
        matrix[i].push(0);
      }
    }
  }

  makeMatrix();

  inp.forEach((e) => {
    matrix[x][y] = 1;
    if (e === ">") {
      matrix[x][y + 1] += 1;
      y++;
    } else if (e === "<") {
      matrix[x][y - 1] += 1;
      y--;
    } else if (e === "^") {
      matrix[x - 1][y] += 1;
      x--;
    } else {
      matrix[x + 1][y] += 1;
      x++;
    }
  });

  let array = [].concat(...matrix);
  let numberHouseWithTwoGift = array.filter((arr) => arr === numberGift);

  return numberHouseWithTwoGift.length;
};

module.exports = {
  day3part3,
};
