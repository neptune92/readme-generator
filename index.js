// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "Title"
}, 

{
    type: "input",
    message: "How would you describe your project?",
    name: "Description"
},

{
    type: "input",
    message: "How do you install this?",
    name: "Installation"
},

{
    type: "input",
    message: "How do we use this?",
    name:"Usage"
},

{
    type: "input",
    message: "Are there any collaborators?",
    name:"Collaborators"
},

{
    type: "checkbox",
    message: "What license is needed?",
    name: "License",
    choices: [
        "None",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense"
        ],
    },

    {
    type: "input",
    message: "What is your email?",
    name: "email"
    
    },

    {
    tyep: "input",
    message: "What is your GitHub?",
    name: "github"
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("README has been written")
    })
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const idk = generateMarkdown(answers);
        writeToFile("README.md", idk)

    })
    
}



// Function call to initialize app
init();
