const fizzBuzz = n => {
  const output = "";
  for(let i = 1; i <= n; i++){
    let string = "";
    if(i % 3 === 0) string += "fizz";
    if (i % 5 === 0) string += "buzz";
    output.push(string || i);
  }
  return output;
}

export default fizzBuzz;