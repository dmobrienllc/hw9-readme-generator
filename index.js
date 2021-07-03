const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const licenseArray = ["Apache", "Boost","CCO", "Gnu GPL 3"];


let createReadMeFile = () => {
    inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: 'Please enter the title of your project:',
            },
            {
                name: 'description',
                type: 'input',
                message: 'Please enter your project description:',
            },
            {
                name: 'installation',
                type: 'input',
                message: 'Please enter installation instructions:',
            },
            {
                name: 'usage',
                type: 'input',
                message: 'Please enter usage instructions:',
            },
            {
                name: 'contribution',
                type: 'input',
                message: 'Please enter contribution instructions:',
            },
            {
                name: 'test',
                type: 'input',
                message: 'Please enter testing instructions:',
            },
            {
                name: "license",
                type: "list",
                message: "Choose your license:",
                choices: licenseArray,
            },
            {
                type: 'input',
                message: 'Please enter github username:',
                name: 'username',
            },
            {
                type: 'input',
                message: 'Please enter contact email address:',
                name: 'email',
            },
        ])
        .then((response) =>{
            let aggregatedMarkdown = generateMarkdown(response);

            fs.writeFile(`README_tmp.md`, aggregatedMarkdown, (err) =>
                err ? console.error(err) : console.log('Success!'))
        });
}
// TODO: Create a function to initialize app
function init() {
    createReadMeFile();
}

// Function call to initialize app
init();
