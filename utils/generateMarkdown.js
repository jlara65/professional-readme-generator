// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (data) => {
  let licenseType = `${data.license}`;
  let youLicense = ''
  if (licenseType === 'MIT') {
    youLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'GPL v3') {
    youLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    youLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  return youLicense;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown =(data) => {
  return `# ${data.title}
  
  ${renderLicenseLink(data)}
  
  ## Description 
  ${data.title}
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Questions](#Questions)
  * [License](#License)
  ## Installation
  ${data.instruction}
  ## Usage
  ${data.usage}
  ## License
  This Project is licensed under the ${data.license} license.
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  If you have any questions, please feel free to send me an email at ${data.email}, or contact me on [GitHub](https://github.com/${data.github})
  
`;
}

module.exports = generateMarkdown;