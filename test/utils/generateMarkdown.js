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
    ![img](${data.screenshot})

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
