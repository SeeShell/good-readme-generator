const fs = require("fs");
const util = require("util");

const axios = require("axios");
const inquirer = require("inquirer");
const renderReadMe = require("./renderReadMe")

// const writeFile = util.promisify(fs.writeFile);

// prompt user with inquirer
init();

function init(){
    promptUser()
        .then(answers => getGitHubData(answers.username))
        // .then(userData => console.log(userData))
        // .then(userData => {
            // const readme = renderReadMe(userData);
            // return writeFile("output/readme.md", readme);
        // })
        // .then(() => console.log("You have successfully created a readme!"))
        .catch(error => {
            console.log(error)
            console.log("Could not create file.")
            process.exit(1);
        })
}

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
      }
    ]);
  }
// then use github api to get user email and profile pic

function getGitHubData(username){
    const queryUrl = `https://api.github.com/users/${username}`;

    return axios.get(queryUrl).then(response => console.log(response.data));
    
};
// then prompt user with questions about the project

// then print the answers to the console

// write a template literal for the readme including the user answers

// write the file to a md