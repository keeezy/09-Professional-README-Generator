// TODO: Include packages needed for this application
const inq = require("inquirer");
const chalk = require("chalk");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function createReadme() {
    fs.writeFileSync("./README.md", "hello testing")
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

createReadme()
