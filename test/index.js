// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message:'Please enter your GitHub username sans "a":',
        name: 'username',
        validate: function (input) {
            if (input.length < 1) {
                            return console.log("Please enter your GitHub username");
                        } else {
                            return true;
                        }
        }
    },
    {
        type: 'input',
        message:'Please enter the name of your project repository:',
        name: 'repository',
        validate: function (input) {
            if (input.length < 1) {
                            return console.log("Please enter the name of your project repository");
                        } else {
                            return true;
                        }
        }
    },
    {
        type: 'input',
        message:'Please enter your project title:',
        name: 'title',
        validate: function (input) {
            if (input.length < 1) {
                            return console.log("Please enter your project title");
                        } else {
                            return true;
                        }
        }
    },
    {
        type: 'input',
        message:'Give a description of your project:',
        name: 'description',
        validate: function (input) {
            if (input.length < 1) {
                            return console.log("Please enter a description of your project");
                        } else {
                            return true;
                        }
        }
    },
    {
        type: 'input',
        message:'Provide the "User Story" for your project:',
        name: 'userStory',
        validate: function (input) {
            if (input.length < 1) {
                            return console.log("Please enter a User Story for your project");
                        } else {
                            return true;
                        }
        }
    },
    {
        type: 'input',
        message:'Provide the "Acceptance Criteria" for your project:',
        name: 'acceptanceCriteria',
        validate: function (input) {
            if (input.length < 1) {
                            return console.log("Please enter the Acceptance Criteria of your project");
                        } else {
                            return true;
                        }
        }
    },
    {
        type: 'input',
        message:'Does your project require any installation steps (enter "None" if not applicable)?',
        name: 'installation',
    },
    {
        type: 'input',
        message:'Provide instructions and examples for use (include screenshots):',
        name: 'usage',
    },
    {
        type: 'input',
        message:'Provide tests written for the project (if applicable; enter "None" if not applicable):',
        name: 'tests',
    },
    {
        type: 'input',
        message:'List your collaborators (enter "None" if applicable):',
        name: 'credits',
    },
    {
        type: 'list',
        message:'Choose a license for your project.',
        choices: ['Academic Free License v3.0', 'Apache license 2.0','European Union Public License 1.1', 'Microsoft Public License','MIT','Mozilla Public License 2.0','Open Software License 3.0'],
        name: 'license',
    },


];

// TODO: Create a function to write README file
writeToFile(fileName, data) = () => {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

const writeFile = util.promisify(writeToFile);

// TODO: Create a function to initialize app
init() = () => {
    try {
        const responses = inquirer.prompt(questions);
            console.log('Your answers: ', responses);
        const markdown = generateMarkdown(responses);
            console.log('Your README: ', markdown);
        writeFile('README.md', markdown);


    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
