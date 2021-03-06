const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./template.js');

inquirer
  .prompt([
    // project title
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
      default: 'Project title to be determined'
    },
    // description section
    {
      type: 'input',
      message: 'Please describe the functionality of your application.',
      name: 'functionality',
      default: 'Functionality will be discussed and provided at a later time.'
    },
    // installation section
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
      default: 'No additional files are needed for installation.'
    },
    // usage section
    {
      type: 'input',
      message: 'Please provide instructions on how to use your application.',
      name: 'usage',
      default: 'Instructions on usage will be completed at a later time.'
    },
    // credits section
    {
      type: 'input',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
      name: 'contribution',
      default: 'No additional collaborators were involved with the development of this project.'
    },
    {
      type: 'input',
      message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
      name: 'thirdParties',
      default: 'No third-party assets were used in this development.'
    },
    {
      type: 'input',
      message: 'If you followed tutorials, include links to those here as well.',
      name: 'tutorial',
      default: 'No tutorials were used during this time.'
    },
    // tests section
    {
      type: 'input',
      message: 'Please write a test for your application.',
      name: 'test',
      default: 'Test will be written at a later time.'
    },
    // questions section
    {
      type: 'input',
      message: 'Please provide a link to your GitHub profile?',
      name: 'github',
      default: 'GitHub link is not provided'
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
      default: 'No email adddress provided.',
    },
    // license section
    {
      type: "list",
      message: "Choose a license to create your badge:",
      name: "license",
      choices: [{
          name: "MIT license",
          value: "MIT"
        },
        {
          name: "Apache License 2.0",
          value: "Apache"
        },
        {
          name: 'BSD 3-Clause "New" or "Revised" license',
          value: "BSD3"
        },
        {
          name: "GNU General Public License (GPL)",
          value: "GPL"
        },
      ],
    },
  ])
  
  .then(response => {
    let badge;
    switch (response.license) {
      case "MIT":
        badge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Apache":
        badge =
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "BSD3":
        badge =
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "GPL":
        badge =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
    }
    
    const readMeDocument = template(response, badge);

    fs.writeFile('DEMO-README.md', readMeDocument, (err) =>
      err ? console.error(err) : console.log('Generating DEMO-README.md...')
    );
  });