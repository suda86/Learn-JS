function day1Part1(input) {
  // let rezultat = 0;
  // const niz = input.split("");

  // for (let i = 0; i < niz.length; i++) {
  //   if (niz[i] === "(") {
  //     rezultat += 1;
  //   } else {
  //     rezultat -= 1;
  //   }
  // }
  // return rezultat;

  //   const arrayNaw = [...input];
  //   const positiv = arrayNaw.filter((e) => {
  //     return e === "(";
  //   });
  //   const negativ = arrayNaw.filter((e) => {
  //     return e === ")";
  //   });
  //   return positiv.length - negativ.length;
  // }

  //   const arrayNaw = [...input];

  //   return arrayNaw.reduce((prev, corr) => {
  //     return corr === "(" ? ++prev : --prev;
  //   }, 0);

  const arrayNaw = [...input];
  let sum = 0;

  for (let i = 0; i < arrayNaw.length; i++) {
    arrayNaw[i] === "(" ? sum++ : sum--;
  }
  return sum;
}

module.exports = {
  day1Part1,
};
