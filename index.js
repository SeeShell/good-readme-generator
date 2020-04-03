const fs = require("fs");
const util = require("util");

const axios = require("axios");
const inquirer = require("inquirer");

const writeFile = util.promisify(fs.writeFile);

// prompt user with inquirer

// then use github api to get user email and profile pic

// then prompt user with questions about the project

// then print the answers to the console

// write a template literal for the readme including the user answers

// write the file to a md