const template = ({ title, functionality, installation, usage, contribution, thirdParties, tutorial, license, github, email }, badge) =>

`# ${title}
${badge}


## Description

${functionality} 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits

${contribution}
${thirdParties}
${tutorial}

## License

${license}
---

## Questions

If you have any additional questions regarding this application, please contact me via the channels provided below:
Github: ${github}
Email: ${email}`;

module.exports = template;