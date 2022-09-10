const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Questions array
const questions = [
    'What is the title of project? (Required) ',
    'Enter a short description (Required): ',
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

// arrow function for inquirer prompt
const init = () => {
    return inquirer.prompt ( [
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter the short description of project!');
                return false;
                }
            }
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
        writeToFile('./utils/SampleREADMe.md', markdown)
    })
};

// call the inquirer prompt function
init ();