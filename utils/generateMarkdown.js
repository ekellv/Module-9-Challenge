// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadges = require('./generateBadges');

function generateMarkdown(data) {

  return `
  
  # ${data.title}
 
  ---

  ## Description 

  ${data.description}

  ![Github license](http://img.shields.io/badge/License-${data.license}-yellow.svg)

  [A version of the deployed website can be viewed here.](${data.url})
  
  ---

  ## Contents
  1. [About](#about)
        * [User Story](#user%20story)
        * [Acceptance Criteria](#acceptance%20criteria)
        * [Visuals](#visuals)
        * [Technologies](#technologies)
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
  
    Please run the following dependencies to install the application: 
    
    \`
    ${data.dependencies}
    \`

  ---

  ## License 

    This reposititory is licensed under ${data.license}. 

    *For more information about this license or any others, please visit: [https://choosealicense.com/](https://choosealicense.com/).

  ---

  ## Contributing 
  
    ${data.contributions}

  ---

  ## Testing 

    The command to run tests on this application is: 
    
    \`
    ${data.tests}
    \`
 
  ---

  ## Authors and Acknowledgements

  Built by: ${data.author}

  ---

  ## Contact Information

  * GitHub: [${data.username}](https://github.com/${data.username})
  * Email: [${data.email}](mailto:${data.email})
  
  `;
}

module.exports = generateMarkdown;
