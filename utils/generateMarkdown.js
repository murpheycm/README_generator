// function to generate the markdown for README
const generateMarkdown = data => {
return `
# ${data.title}
![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)

## Description: 
${data.description}

> ${data.userStory}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contribution)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

![alt text](${data.screenshot})

## Tests
${data.tests}

## Contributing
${data.contribution}

## Credits
${data.credits}

## License
This project is licensed under [${data.license}](https://spdx.org/licenses/)

## Questions
If you have any questions about this projects, please contact me:

GitHub Profile: [${data.username}](https://github.com/${data.username})

Github Repository: [${data.repository}](https://github.com/murpheycm/README_generator)

Email Address: ${data.email}
`;
}

//Export function to be used by index.js
module.exports = generateMarkdown;
