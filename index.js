const fs = require("fs");
const util = require("util");

const axios = require("axios");
const inquirer = require("inquirer");
const RenderReadMe = require("./renderReadMe");
const render = new RenderReadMe();
const writeFile = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);


// prompt user with inquirer
init();

function init() {
  promptUser()
    .then(answers => {
    const markdownAns = render.renderProject(answers)  
    writeFile("output/readme.md", markdownAns)
    return answers;
    })
    .then(answers => getGitHubInfo(answers.username))
    
    .then(userData => {
        const markdownAvatar = render.renderAvatar(userData)
        return appendFile("output/readme.md", markdownAvatar)
    })
    .then(() => console.log("You have successfully created a readme!"))
    .catch((error) => {
      console.log(error);
      console.log("Could not create file.");
      process.exit(1);
    })
}

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
      },
      {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions:",
      },
      {
        type: "input",
        name: "usage",
        message: "Please enter usage instructions:",
      },
      {
        type: "input",
        name: "credits",
        message: "Please enter credits:",
      },
      {
        type: "list",
        name: "license",
        message: "Do you have a license?",
        choices: [ "MIT", "other"]
      },
      {
        type: "input",
        name: "contributing",
        message: "Please enter contributors:",
      },
      {
        type: "input",
        name: "tests",
        message: "Please enter test instructions:",
      },
      {
        type: "input",
        name: "questions",
        message: "Please enter questions:",
      },

]);
}
// then use github api to get user email and profile pic

function getGitHubInfo(username) {
//  console.log(username);
  const queryUrl = `https://api.github.com/users/${username}`;
  return axios.get(queryUrl).then((response) => response.data);
}

// then prompt user with questions about the project

// then print the answers to the console

// write a template literal for the readme including the user answers

// write the file to a md
