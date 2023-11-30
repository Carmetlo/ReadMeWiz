// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, generateMarkdown(data));
        console.log('README.md successfully created!');
    } catch (err) {
        console.error(err);
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('.README.md', data);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
