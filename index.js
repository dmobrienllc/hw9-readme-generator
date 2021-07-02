const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const licenseArray = ["Gnu", "Open CS"];


let createReadMeFile = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the title of your project:',
                name: 'title',
            },
            {
                name: 'description',
                type: 'input',
                message: 'Please enter your project description:',
            },
            {
                name: "license",
                type: "list",
                message: "Choose your license:",
                choices: licenseArray,
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
