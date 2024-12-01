const radius = [3, 1, 2, 4];

const area = (radius) => Math.PI * radius * radius; // function to calculate area

const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
