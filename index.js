const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./template.js');

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

inquirer
  .prompt([
    // project title
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    // description section
    {
      type: 'input',
      message: 'What was your motivation?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'Why did you build this project?',
      name: 'reason',
    },
    {
      type: 'input',
      message: 'What problem does it solve?',
      name: 'problem',
    },
    {
      type: 'input',
      message: 'What did you learn?',
      name: 'lesson',
    },
    // installation section
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description.',
      name: 'installation',
    },
    // usage section
    {
      type: 'input',
      message: 'Provide instructions for the user to follow',
      name: 'usage',
    },
    // credits section
    {
      type: 'input',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
      name: 'thirdParties',
    },
    {
      type: 'input',
      message: 'If you followed tutorials, include links to those here as well.',
      name: 'tutorial',
    },
    // tests section
    {
      type: 'input',
      message: 'Please write a test for your application. Then provide examples on how to run them here.',
      name: 'test',
    },
    // questions section
    {
      type: 'input',
      message: 'Please provide a link to your GitHub profile?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
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
  // .then(({ license }) => {
  //   // Create a license string
  //   let badge;
  //   switch (license) {
  //     case "MIT":
  //       badge =
  //         "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  //       break;
  //     case "Apache":
  //       badge =
  //         "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  //       break;
  //     case "BSD3":
  //       badge =
  //         "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  //       break;
  //     case "GPL":
  //       badge =
  //         "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  //       break;

  //     default:
  //       throw new Error(`Invalid license ${license}`);
  //   }
  // })

  .then(response => {
    const readMeDocument = template(response);

    fs.writeFile('README.md', readMeDocument, (err) =>
      err ? console.error(err) : console.log('Generating README.md...')
    );
  });