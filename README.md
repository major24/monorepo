# monorepo

clone the project

in root, learna bootstap

in root, npm run exec

----------------------------------------

// How to setup a simple monorepo project
// create a new folder

mkdir monorepo
cd monorepo
// run lerna bootstrap to create the initial files
// it will create packages folder and lerna file
// within packages folder you can create multiple projects
// we are creating two simple add, subtraction modules
// we are going to be using this modules in our calculation module

lerna bootstrap
cd packages
mkdir addition-module
mkdir subtraction-module
mkdir calcuation-module

// cd into addition-module
// make it a npm project
cd addition-module
npm init --yes

// do this for subtraction, caldulation modules as well
// within both (add, subtraction) modules create a small js module

// in calulation module import / require those module and use them.
// add those moduels as dependencies in package json file 

  "dependencies": {
    "addition-module": "1.0.0",
    "subtraction-module": "1.0.0"
  },

// move to root, monorepo and add run command to the package json
// this should run when called
  "scripts": {
    "exec": "node ./packages/calculation-module/index.js"
  },


npm run exec
// WILL throw an error as Cannot find module, this is due to packages are not simlink by lerna yet. run lerna cmd

$ lerna bootstrap
lerna notice cli v3.13.1
lerna info Bootstrapping 3 packages
lerna info Symlinking packages and binaries
lerna success Bootstrapped 3 packages

// now run npm run ..
npm run exec

// notice calcuation package now inclues node_moudles dir with all required packages












