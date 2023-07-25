// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message:'Please enter your GitHub username sans "@":',
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
                            return console.log("Please enter a valid repository name");
                        } else {
                            return true;
                        }
        }
    },
     {
        type: 'input',
        message:'Please enter your email address (enter "N/A" if you would not like to provide your email):',
        name: 'email',
        validate: function (input) {
            if (input.length < 1) {
                            return console.log("Please enter a valid email address or N/A");
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
        message:'Does your project require any installation steps (enter "None" if not applicable)?',
        name: 'installation',
    },
    {
        type: 'input',
        message:'Provide instructions and examples for use:',
        name: 'usage',
        validate: function (input) {
            if (input.length < 1) {
                            return console.log("Please provide instructions for application use");
                        } else {
                            return true;
                        }
        }
    },
    {
        type: 'input',
        message:'Provide the file address for your screenshot or enter "None" (i.e. https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg):',
        name: 'screenshot',
    },
    {
        type: 'input',
        message:'Provide tests written for the project (enter "None" if not applicable):',
        name: 'tests',
    },
    {
        type: 'input',
        message:'Provide instructions for individuals who wish to contribute (enter "None" if not applicable):',
        name: 'contribution',
    },
    {
        type: 'input',
        message:'List your collaborators (enter "None" if not applicable):',
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        } else {
            console.log("Your README.md file has been generated!");
        }
        
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
