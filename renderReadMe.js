const axios = require("axios");

const RenderReadMe = function (){};

// Avatar generator grabbing user info from the github API
RenderReadMe.prototype.renderAvatar = function(userData){
    
    const { avatar_url, login, email } = userData;
     
    const markdownAvatar = `
## Author

![${login}](${avatar_url})

Email: ${email}
    
    `
    return markdownAvatar;
}

// Main markdown generator
RenderReadMe.prototype.renderProject = function(answers){
    
    if (answers.license === "Artistic 2.0"){
        badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    }else if (answers.license === "MIT"){
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }else if (answers.license === "Mozilla"){
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }else if (answers.license === "None"){
        badge = ""
    }
    return `## ${answers.title}

${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)


## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.credits}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

${answers.questions}

## License

${badge}

`;
}

// Github API accessed to get data from the user's profile
RenderReadMe.prototype.getGitHubInfo = function(username) {
      const queryUrl = `https://api.github.com/users/${username}`;
      return axios.get(queryUrl).then((response) => response.data);
    }
module.exports = RenderReadMe;
