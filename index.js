// TODO: Include packages needed for this application
const inq = require("inquirer");
const chalk = require("chalk");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"

    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project."

    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."

    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed."

    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles."

    },
    {
        type: "input",
        name: "license",
        message: "This lets other developers know what they can and cannot do with your project."

    },


];

// TODO: Create a function to write README file
function createReadme(readme) {
    fs.writeFileSync("./README.md", `
    # ${readme.title}
    ## Description
    ${readme.description}
    ## Installation Instructions
    ${readme.installation}
    ## Usage
    ${readme.usage}
    ## credits
    ${readme.usage}
    License
    ${readme.license}
    `)
}


inq
.prompt(questions)
.then((answers) => {
    createReadme(answers.title)
    console.log(chalk.green("Success"))

    
})

.catch((error) => {
    if (error.isTtyError) {
        console.error("Prompts could not be rendered in current environment")
    } else {
        console.error(`Something went wrong`, error)
    }
})

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

createReadme()
