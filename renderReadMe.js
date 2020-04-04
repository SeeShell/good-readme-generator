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
    return `## ${answers.title}

description

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
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

`;


    // getGitHubData(answers.username)
    // .then(userData => renderAvatar(userData))
        

}

// function getGitHubData(username) {
//     const queryUrl = `https://api.github.com/users/${username}`;
    
//     axios.get(queryUrl).then((response) => {
//         const userData = response.data;
//         return userData;
//     })
//   }
module.exports = RenderReadMe;
