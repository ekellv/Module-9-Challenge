const licenseBadges = require('./generateBadges');

// function to generate the markdown for the new-README.md file  
function generateMarkdown(data) {

  return `
  
# ${data.title}

## Description 

${data.description}

![Github license](http://img.shields.io/badge/License-${data.license}-yellow.svg)

[A version of the deployed website can be viewed here.](${data.url})

## Contents
1. [About](#about)
      1. [User Story](#user%20story)
      2. [Acceptance Criteria](#acceptance%20criteria)
      3. [Visuals](#visuals)
      4. [Technologies](#technologies)
2. [Installation](#installation)
3. [License](#license)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Testing](#testing)
7. [Authors and Acknowledgements](#authors%20and%20acknowledgements)

## About

${data.about}

## User Story



## Acceptance Criteria 



## Visuals: 

![]()

## Technologies



## Installation 

Please run the following dependencies to install the application: 

\`
${data.dependencies}
\`

## License 

This reposititory is licensed under the ${data.license} license. 

For more information about this license or any others, please visit: [https://choosealicense.com/](https://choosealicense.com/).

## Usage 

${data.usage}

## Contributing 

${data.contributions}

## Testing 

The command to run tests on this application is: 

\`
${data.tests}
\`

## Authors and Acknowledgements

Built by: ${data.author}

## Contact Information

* GitHub: [${data.username}](https://github.com/${data.username})
* Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;