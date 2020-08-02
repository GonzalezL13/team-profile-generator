const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");


const employeesArray = [];
const idArray = [];


function startApp() {

    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
                validate: managerInput => {
                    if (managerInput) {
                        return true;
                    } else {
                        console.log("Please enter manager's name!");
                        return false;
                    }
                }
            },

            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?",
                validate: managerIdInput => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log("Please enter manager's ID!");
                        return false;
                    }
                }
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?",
                validate: managerEmailInput => {
                    if (managerEmailInput) {
                        return true;
                    } else {
                        console.log("Please enter manager's email!");
                        return false;
                    }
                }
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?",
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log("Please enter manager's office number!");
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerIdInput, answers.managerEmailInput, answers.managerOfficeNumber);
            employeesArray.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
    }

    //user gets to pick which team member to add
    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "teamMember",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.teamMember) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        });

    }

    //add engineer function with prompts



    //add intern function with prompts







    createManager();

}


startApp();

