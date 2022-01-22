const inquirer = require('inquirer');
const fs = require('fs');

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
    // installation section
    {
      type: 'input',
      message: 'What are the steps required to install your project?\n Provide a step-by-step description of how to get the development environment running.',
      name: 'installation',
    },
    // usage section
    {
      type: 'input',
      message: 'Provide instructions and examples for use. Include screenshots as needed.\n To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.\n Then, using the relative filepath, add it to your README using the following syntax:\n ```md![alt text](assets/images/screenshot.png)```',
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
      // license section
    {
    type: "list",
    message: "Choose a license to create your badge:",
    name: "license",
    choices: [
      { name: "MIT license", value: "MIT" },
      { name: "Apache License 2.0", value: "Apache" },
      { name: 'BSD 3-Clause "New" or "Revised" license', value: "BSD3" },
      { name: "GNU General Public License (GPL)", value: "GPL" },
    ],
    },
    // tests section
    {
      type: 'input',
      message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
      name: 'test',
    },
    // questions section
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  // .then((response) =>
  //   response.confirm === response.password
  //     ? console.log('Success!')
  //     : console.log('You forgot your password already?!')
  // );


