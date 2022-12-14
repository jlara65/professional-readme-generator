
// Function to returns the license link
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

// Function to generate markdown for README template
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
  * [Tests](#Tests)
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

// export the module
module.exports = generateMarkdown;