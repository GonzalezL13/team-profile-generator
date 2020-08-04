const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const fs = require("fs");
const teamTemplate = require("./src/page-template");

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
                    var valid = !isNaN(parseFloat(managerIdInput));
                    return valid || 'Please enter a number';
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
                    var valid = !isNaN(parseFloat(officeNumber));
                    return valid || 'Please enter a number';
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
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    buildTeam();
            }
        });
    }

    //add engineer function with prompts
    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
                validate: engName => {
                    if (engName) {
                        return true;
                    } else {
                        console.log("Please enter engineer's name!")
                        return false;
                    }
                }
            },

            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's id?",
                validate: engineerIdInput => {
                    var valid = !isNaN(parseFloat(engineerIdInput));
                    return valid || 'Please enter a number';
                }
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?",
                validate: engineerEmailInput => {
                    if (engineerEmailInput) {
                        return true;
                    } else {
                        console.log("Please enter engineer's email!");
                        return false;
                    }
                }
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub username?",
                validate: engineerGithubInput => {
                    if (engineerGithubInput) {
                        return true;
                    } else {
                        console.log("Please enter engineer's GitHub username!");
                        return false;
                    }
                }
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            employeesArray.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
    }


    //add intern function with prompts
    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?",
                validate: internNameInput => {
                    if (internNameInput) {
                        return true;
                    } else {
                        console.log("Please enter intern's name!")
                        return false;
                    }
                }
            },

            {
                type: "input",
                name: "internId",
                message: "What is the intern's id?",
                validate: internIdInput => {
                    var valid = !isNaN(parseFloat(internIdInput));
                    return valid || 'Please enter a number';
                }
            },

            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email?",
                validate: internEmailInput => {
                    if (internEmailInput) {
                        return true;
                    } else {
                        console.log("Please enter intern's email!");
                        return false;
                    }
                }
            },

            {
                type: "input",
                name: "internSchool",
                message: "What is the intern's school?",
                validate: internSchoolInput => {
                    if (internSchoolInput) {
                        return true;
                    } else {
                        console.log("Please enter intern's school!");
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            employeesArray.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });
    }

    function buildTeam() {
        fs.writeFile("./dist/team.html", teamTemplate(employeesArray), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }



        createManager();

    }


    startApp();

