const RenderReadMe = function (){};


RenderReadMe.prototype.renderAvatar = function(userData){
    // console.log(userData);
    const { avatar_url, login, email } = userData;
    // const avatarImage = `![${login}](${avatar_url})`
     
    const markdownAvatar = `
## Author

![${login}](${avatar_url})

Email: ${email}
    
    `
    return markdownAvatar;


    // return writeFile("output/readme.md", readme);
}
RenderReadMe.prototype.renderProject = function(answers){
    // getGitHubData(answers.username)
    if (answers.license === "Artistic 2.0"){
        badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    }else if (answers.license === "MIT"){
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
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


module.exports = RenderReadMe;
