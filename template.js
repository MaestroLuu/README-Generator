const template = ({
    title,
    motivation,
    reason,
    problem,
    lesson,
    installation,
    usage,
    contribution,
    thirdParties,
    tutorial,
    license,
    github,
    email
}) =>
`# ${title}

## Description

${motivation} 
${reason} 
${problem} 
${lesson}

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
Email: ${email}

## Tests

${test}`;

module.exports = template;