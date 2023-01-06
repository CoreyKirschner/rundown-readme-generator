// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const mustache = require('mustache');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    name: 'license',
    type: 'list',
    message: 'Choose a license for your project',
    choices: ['MIT', 'GPL3', 'Apache', 'None']
},
{
    name: 'projectName',
    type: 'input',
    message: 'What is the name of your project?'
},
{
    name: 'projectDescription',
    type: 'input',
    message: 'Provide a description of your project'
},
{
    name: 'installationInstructions',
    type: 'input',
    message: 'Provide installation instructions for your project'
},
{
    name: 'usageInformation',
    type: 'input',
    message: 'Provide usage information for your project'
},
{
    name: 'contributionGuidelines',
    type: 'input',
    message: 'Provide contribution guidelines for your project'
},
{
    name: 'testInstructions',
    type: 'input',
    message: 'Provide instructions for running tests for your project'
},
{
    name: 'githubUsername',
    type: 'input',
    message: 'Enter your GitHub username'
},
{
    name: 'emailAddress',
    type: 'input',
    message: 'Enter your email address'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
  }

// TODO: Create a function to initialize app
// Function to initialize app
function init() {
    // Prompt user for input
    inquirer.prompt(questions).then(answers => {
      // Destructure answers object
      const {
        license,
        projectName,
        projectDescription,
        installationInstructions,
        usageInformation,
        contributionGuidelines,
        testInstructions,
        githubUsername,
        emailAddress,
      } = answers;
  
      // Generate content for README file
      const readme = `

  # ${projectName}

  ## License

  ${license}

  ## Description
  
  ${projectDescription}
  
  ## Installation
  
  ${installationInstructions}
  
  ## Usage
  
  ${usageInformation}
  
  ## Contribution Guidelines
  
  ${contributionGuidelines}
  
  ## Running Tests
  
  ${testInstructions}

  # Questions

  For any questions, please feel free to reach out to me on GitHub(https://github.com/${githubUsername}) or email me at ${emailAddress}
  `;
  
// Write content to README.md file
writeToFile('README.md', readme);
})};

// Function call to initialize app
init()