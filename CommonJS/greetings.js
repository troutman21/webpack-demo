// step 1. Log module
console.log(`module: `, module);

// step2. create an object with a method on it that references a local variable
const myGreetings = {
  sayHi() {
    console.log(`hello, ${name}`);
  },
};

const name = 'Phillip';

// step 3. Set that object to be module.exports
module.exports = myGreetings;
