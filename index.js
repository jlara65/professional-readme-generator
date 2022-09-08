const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

const questions = [
    'What is the title of project? ',
    'Enter a short description: ',
    'Enter the installation instructions: ',
    'Enter the usage information: ',
    'Enter the contribution guidelines: ',
    'Enter the test instructions: ',
    'Enter your E-Mail Address: ',
    'Enter your GitHub username: ',
    'Choose a license: '

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf-8', (err) => {
        err ? console.log(err) : console.log('Your data has been successful input the generate!')
    })
}

const init = () => {
    return inquirer.prompt ( [
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'instruction',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'test',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'github',
            message: questions[7],
        },
        {
            type: 'list',
            name: 'license',
            Message: questions[8],
            choices: ['MIT', 'GPL v3', 'Apache'],
            default: 'MIT'
        }

    ])
    .then(data => {
        console.log(data);
        const markdown = generateMarkdown(data);
        writeToFile('./assets/testREADME.md', markdown)
    })
};

init ();