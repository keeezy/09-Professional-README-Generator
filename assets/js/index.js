// TODO: Include packages needed for this application
const inq = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: "GOATED project",

    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
        default: "describe it to me pretty please",

    },
    {
        type: "input",
        name: "installation",
        message: "What were the installation instructions?",
        default: "This is how you do it....dun dun dun",

    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information",
        default: "Many things were done",

    },
    {
        type: "input",
        name: "contributors",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        default: "Elon Musk",
    },
    {
        type: "list",
        name: "license",
        message: "What license is used?",
        choices: ["A", "B", "C", "D"],
        defualt: ["Z"],

    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
        default: "ex... ladiesman217"

    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        default: "ex... ladiesman217@yahoo.com "

    },

];

// TODO: Create a function to write README file
const createReadme = (readme) => {
    fs.writeFileSync("./README.md", `
# ${readme.title}
## Description
${readme.description}
## Table of Contents
- [Installation] (#installation)
- [Usage] (#usage)
- [License] (#license)
- [Contributing] (#contributing)
- [Tests] (#tests)
- [Questions] (#questions)
## Installation Instructions
${readme.installation}
## Usage
## License
${readme.license}
## Contributing
${readme.contributors}
## Tests
## Questions
- https://github.com/${readme.username}
- ${readme.email}



`)
};



// prompts
inq
.prompt(questions)
.then((answers) => {
    createReadme(answers)
    console.log(chalk.green("Success"))
})

.catch((error) => {
    if (error.isTtyError) {
        console.error("Prompts could not be rendered in current environment")
    } else {
        console.error(`Something went wrong`, error)
    }
})


