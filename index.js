const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt ( [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of project? '
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a short description: '
        },
        {
            type: 'input',
            name: 'instruction',
            message: 'Enter the installation instructions: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information: '
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter the contribution guidelines: '
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the test instructions: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your E-Mail address: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username: '
        },
        {
            type: 'list',
            name: 'license',
            Message: 'Choose a license: ',
            choices: ['MIT', 'GPLv3', 'Apache'],
            default: 'MIT'
        }

    ])
};

promptUser ()
.then(answers => {
    console.log(answers);
});