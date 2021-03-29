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

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Credits
  ${data.Collaborators}

  ## License
  ${data.License}

  ## Badges


  ## Features


  ## Contributing
  ${data.Collaborators}

  ## Tests


  ## Questions?
  Contact me here: ${data.email}
  <a herf=${data.github}>

`;
}

module.exports = generateMarkdown;
