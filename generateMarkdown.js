let renderTitle = (title) => {
  return `# ${title}                                                              
  
  `
}

//renderTOC hard codes, just easier
let renderTOC = () => {
  return `## Table of Contents
  1. [General Info](#general-info)
  2. [Screenshot](#screenshot)
  3. [Technologies](#technologies)
  4. [Installation](#installation)
  5. [FAQs](#faqs)
  
  `
}

let renderDescription = (description) => {
  return `## Description: ${description}                                                 
  
  `
}

let renderInstallationInstructions = (instructions) => {
  return `## Installation: ${instructions}                                                 
  
  `
}

let renderUsageInstructions = (usage) => {
  return `## Usage: ${usage}                                                 
  
  `
}

let renderTestSection = (usage) => {
  return `## Testing: ${usage}                                                 
  
  `
}

//encapsulates email and github user in FAQ
let renderFAQ = (data) => {
  let tmpFAQ = renderGitHubUser(data.username);
  tmpFAQ += renderEMail(data.email);
  return tmpFAQ;

  return `## Frequently Asked Questions:  
          ${tmpFAQ}
          
  `;
}

let renderGitHubUser = (username) => {
  return `## Q. What is your git hum user name? 
             A. ${username}                                                 
  
  `
}

let renderEMail = (email) => {
  return `##  Q. What is your email address? 
              A. Contact Me via ${email}                                                 
  
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let renderLicenseSection = (license) => {
  let linkText = getLicenseLink(license);

  return `## License: ${license} ${linkText}                                                 
    
    `
  }

  //see what you need here.
  let renderLicenseBadge = (license) => {
    let linkText = getLicenseLink(license);
  
    return `## License: ${license} ${linkText}                                                 
      
      `
    }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function getLicenseLink(license) {
  switch (license){
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "CCO":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Gnu GPL 3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
        return "";
      break;
  }
}

function generateMarkdown(data) {
  let aggregatedMarkdown = renderTitle(data.title);
  aggregatedMarkdown += renderTOC();
  aggregatedMarkdown += renderLicenseBadge(data.license)
  aggregatedMarkdown += renderDescription(data.description);
  aggregatedMarkdown += renderInstallationInstructions(data.installation);
  aggregatedMarkdown += renderUsageInstructions(data.usage);
  aggregatedMarkdown += renderTestSection(data.test);
  aggregatedMarkdown += renderLicenseSection(data.license);
  aggregatedMarkdown += renderFAQ(data);
  return aggregatedMarkdown;
}

module.exports = generateMarkdown;
