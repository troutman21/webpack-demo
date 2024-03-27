const fizzBuzz = n => {
  let output = "";
  for(let i = 1; i <= n; i++){
    let string = "";
    if(i % 3 === 0) string += "fizz";
    if (i % 5 === 0) string += "buzz";
    output += string || i;
    if(i !== n) output += " ";
  }
  return output;
}

export default fizzBuzz;