// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Description: 
    ${data.description}
    ${data.userStory}

    ## Table of Contents
    * [`acceptanceCriteria`](#acceptanceCriteria)
    * [`installation`](#installation)
    * [`usage`](#usage)
    * [`tests`](#tests)
    * [`contributing`](#contribution)
    * [`credits`](#credits)
    * [`license`](#license)
    * [`questions`](#questions)

    ## Acceptance Criteria
    ${data.acceptanceCriteria}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}
    [img](${data.screenshot})

    ## Tests
    ${data.tests}

    ## Contributing
    ${data.contribution}

    ## Credits
    ${data.credits}

    ## License
    ${data.license}

    ## Questions
    ### GitHub Profile: [${data.username}](https://github.com/${data.username})
    ### Github Repository: ${data.repository}
    ### Email Address: ${data.email}
  `;
}

module.exports = generateMarkdown;
