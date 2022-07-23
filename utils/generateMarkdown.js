// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadges = require('./utils/generateBadges');



// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data.licenses = licenseBadges[data.license];
  return `# ${data.title}
 
  ---

  ## Description 

  ${data.description}

  ${data.licenses}

  [A version of the deployed website can be viewed here.](${data.url})
  
  ---

  ## Contents
  1. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance Criteria](#acceptance%20criteria)
    3. [Visuals](#visuals)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Authors and Acknowledgements](#authors%20and%20acknowledgements)

  ---
  ## About

    ${data.about}

  ---

  ## User Story

  ---

  ## Acceptance Criteria 

  ---

  ## Visuals: 

    ![]()

  ## Installation: 
  
    To install the application: 
    
    ${data.installation}

  ---

  ## License 

    The license used for this project was: ${data.license}. 

    *For more information about this license, please visit: [[https://choosealicense.com/](https://choosealicense.com/)].

  ---

  ## Contributing 
  
    ${data.contributions}

  ---

  ## Testing 

    The command to run tests on this application is: 
    ${data.tests}
 
  ---

  ## Authors and Acknowledgements

  Built by: ${data.author}

  ---

  ## Contact Information

  * GitHub Username: ${data.username}
  * Email: ${data.email}
  
  `;
}

module.exports = generateMarkdown;
