let renderTitle = (title) => {
  return `# ${title}                                                              
  
  `
}

let renderDescription = (description) => {
  return `## ${description}                                                 
  
  `
}

let renderEMail = (email) => {
  return `## Contact Me: ${email}                                                 
  
  `
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let renderLicenseBadge = (license) => {
  switch (license){
    case "Apache":

    break;

    default:

    break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  let aggregatedMarkdown = renderTitle(data.title);
  aggregatedMarkdown += renderDescription(data.description);
  aggregatedMarkdown += renderEMail(data.email);
  return aggregatedMarkdown;
}

module.exports = generateMarkdown;
