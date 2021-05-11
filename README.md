# Build Tools Demos
> This repo contains the build tools demos and explanation on how to conduct them 

## [CommonJS](./CommonJS)

1. __Show how to require and use built in modules to Node.js__
    - Navigate to the [builtInModules.js](./CommonJS/builtInModules.js) file
    - Explain the syntax for requiring in built in modules using the common.js module system
    - Show that you can do some interesting things with these modules like log current user info to the console (example code provided)
    - Note: you can simply run this file using Node to properly show logs to the console

1. __Show how the Common.js module system imports/exports from one file to others__
    - For this section you will be working in the [common.js](./CommonJS/common.js) file and the [greetings.js](./CommonJS/greetings.js) file

    - First, go to the `greetings.js` file and log the built in `module` object to the console using Node to show that you get a bunch of information about the current file/module
      - This is a good time to point out the `exports` property on the `module` object and explain that this will be accessible to other modules by using `require` statement
    
    - Next, uncomment the code for step 2 showing the `myGreetings` object with the `sayHi` method on it that is referencing a local variable in that file, `name`

    - Next, show the syntax of setting `module.exports` equal to our `myGreetings` object

    - Next, navigate to the `common.js` file and show how we can require the exported `module.exports` object from our `greetings.js`

    - Finally, execute the `sayHi` method on our myGreetings variable

    - __Bonus Question__: What happens when we add a different `name` variable in the `common.js` file and run our `sayHi` method? will it log that name or the name from the `greetings.js` file?
      - Answer: it will log the name from the  `greetings.js` file. We are seeing closure play out here. Always remember, where we __define__ our functions determine what variables we have access to when we __execute__ our functions.

1. __Show Common.js in more serious codebase__
    - Finally, you will want to show the residents how Common.js work in larger code bases. You can do this in one of the Codesmith codebases (if you have access to it) or you can simply go ot the Database Assessment and show how it is being used there

## [ES6-Modules](./ES6-Modules)
1. __Explain briefly what all of your files are doing__
    - Inside the [ES6-Modules](./ES6-Modules) directory there are 4  javascript files that are importing and exporting simple functions from file to file. Go through and briefly explain the syntax and what is happening in each of the files

1. __Create the bundle and run the code__
    - Make sure to run `npm install` in [this](./ES6-Modules) directory to install Webpack and other dependencies
    - Explain that the browser doesn't yet know how to use ES6 Modules so we need to use webpack to take all of our source code files and create one JS file with __all__ that source code to run in our browser
    - run the `bundle` script in [this](./ES6-Modules) directory
    - Webpack will map out your dependency tree (follow all the import statements) and create a `dist` directory with a `main.js` bundle file in it.
    - Run that `main.js` file using Node and show all of your logs in the console