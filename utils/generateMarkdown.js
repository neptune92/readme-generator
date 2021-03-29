// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}


  ## Description
  ${data.Description}


  # Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)
  * [Badges](#Badges)
  * [Features](#Features)
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Questions](#Questions)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}
  The following video is a demonstration on how to run the file: <a href="https://www.youtube.com/watch?v=SELJoty1R58&ab_channel=AngelaRubio">Link</a>

  ## Credits
  ${data.Credits}

  ## License
  ${data.License}

  ## Badges


  ## Features


  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Questions
  Contact me here: ${data.email}
  <br>
  [${data.github}](github.com/${data.github})

`;
}

module.exports = generateMarkdown;
