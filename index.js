// Variable packages needed for this application
const inq = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

// Array of questions for user input
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
        message: "What needs to be installed for the application to work?",
        default: "This is how you do it....dun dun dun",

    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use",
        default: "Many things were done",

    },
    {
        type: "list",
        name: "license",
        message: "What license is used?",
        choices: ["APACHE 2.0", "BSL 1.0", "The Perl License", "None"],

    },
    {
        type: "input",
        name: "contributors",
        message: "Were there any collaborators with this project? If so, list them here!",
        default: "Elon Musk",
    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for your application. Then provide examples on how to run them here.",
        default: "testing 1...2...3...",
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

// Function to write README file
const createReadme = (readme) => {
    // Creates badge for depending on user choice
    let badge = "";
    if (readme.license == "APACHE 2.0") {
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (readme.license == "BSL 1.0") {
        badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } else if (readme.license == "The Perl License") {
        badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    }
    
    
fs.writeFileSync("./newREADME.md",
`# ${readme.title}
${badge}

## Description
${readme.description}

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${readme.installation}

## Usage:
${readme.usage}

## License:
This Project is licensed under: ${readme.license}

## Contributing:
${readme.contributors}

## Tests:
${readme.tests}

## Questions:
If there are questions you can reach me via github/email. Listed below
- https://github.com/${readme.username}
- ${readme.email}



`)


}

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


