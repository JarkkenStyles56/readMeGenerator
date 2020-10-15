const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js");
const Choices = require("inquirer/lib/objects/choices");
// array of questions for user
function questions() {
    return inquirer.prompt([
        {

            type: "input",
            name: "title",
            message: "Hello there! What is the title of your Readme?"
        },
        {

            type: "input",
            name: "description",
            message: "Alright than, describe your project here =>"
        },
        {

            type: "input",
            name: "installation",
            message: "Any instructions for installation? Leave them here =>"
        },
        {

            type: "input",
            name: "usage",
            message: "How do you use your program?"
        },
        {

            type: "checkbox",
            name: "licenses",
            message: "What is this project licensed under?"
            choices: [
                new inquirer.Separator(' = Licenses = '), {
                    name
                }
            ]
        },
        {

            type: "input",
            name: "contributors",
            message: "Who all contributed to this project? List them here =>"
        },
        {

            type: "input",
            name: "tests",
            message: "How do you run your tests? If there are no tests, reply with 'none'."
        },
        {

            type: "input",
            name: "questions",
            message: "What is your gitHub username?"
        },
        {

            type: "input",
            name: "questions",
            message: "What is your email address?"
        },
    ]);
};
questions()
// function to write README file
//function writeToFile(fileName, data) {}

// function to initialize program
//function init() {}

// function call to initialize program
//init();
