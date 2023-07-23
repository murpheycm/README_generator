function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Description: 
    ${data.description}
    ${data.userStory}

    ## Table of Contents
    * # Acceptance Criteria
    * # Installation
    * # Usage
    * # Tests
    * # Credits
    * # License

    ## Acceptance Criteria
    ${data.acceptanceCriteria}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}
    ![img](${data.screenshot})

    ## Tests
    ${data.tests}

    ## Credits
    ${data.credits}

    ## License
    ${data.license}
  `;
}

module.exports = generateMarkdown;
