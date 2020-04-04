const RenderReadMe = function (){};


const renderAvatar = function(userData){
    // console.log(userData);
    const { avatar_url, login } = userData;
    // const avatarImage = `![${login}](${avatar_url})`
     
    console.log(`avatar: ${avatar_url} 
    login: ${login}`);


    // return writeFile("output/readme.md", readme);
}
const renderProject = function(answers){
    
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

    ## Author`;

    
    // getGitHubData(answers.username)
    // .then(userData => renderAvatar(userData))
        

}

function getGitHubData(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    
    return axios.get(queryUrl).then((response) => response.data);
  }
module.exports = renderProject;
