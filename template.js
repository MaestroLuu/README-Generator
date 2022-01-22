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
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Credits

${contribution}<br />
${thirdParties}<br />
${tutorial}<br />

## License

### ${license}
---

## Questions

If you have any additional questions regarding this application, please contact me via the channels provided below:<br />
Github: ${github}<br />
Email: ${email}`;

module.exports = template;