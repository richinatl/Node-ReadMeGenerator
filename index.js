// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("GitHub user name is required");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("email address is required");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Project name is required");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("A description is required");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Installation instructions required");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Instructions for usage:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Instructions for use are required.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributors",
    message: "Are there any contributors on this project?",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Describe the tests written for your application and how to use them:",
  },
  {
    type: "confirm",
    name: "confirmLicenses",
    message: "Would you like to include a license?",
    default: false,
  },
  {
    type: "list",
    name: "licenses",
    message: "What license would you like to include?",
    choices: ["MIT", "GNU", "Apache"],
    when: ({ confirmLicenses }) => {
      if (confirmLicenses) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
