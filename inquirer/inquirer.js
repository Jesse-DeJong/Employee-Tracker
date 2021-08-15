const inquirer = require('inquirer');

function menu() {
    inquirer.prompt({ // Main menu
        name: 'query',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit",
        ]
    })
    .then((answers) => { // Switch case to initiate function for user input
        switch(answers.query) {
            case "View All Employees":
                viewAllEmployees();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Update Employee Role":
                updateEmployeeRole();
                break;

            case "View All Roles":
                viewAllRoles();
                break;

            case "Add Role":
                addRole();
                break;

            case "View All Departments":
                viewAllDepartments();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Quit":
                quit();
                break;
        }
    })
}

function viewAllEmployees () {

}

function addEmployee () {

}

function updateEmployeeRole () {

}

function viewAllRoles () {

}

function addRole () {

}

function viewAllDepartments () {

}

function addDepartment () {

}

function quit () {
    inquirer.prompt({
        name: 'quit',
        type: 'confirm',
        message: 'Are you sure you wish to exit the application?'
    })
    .then(data => {
        if (data.quit === false) {
            menu();
        }
    })
}

module.exports = {
    menu,
    viewAllEmployees,
    addEmployee,
    updateEmployeeRole,
    viewAllRoles,
    addRole,
    viewAllDepartments,
    addDepartment,
    quit
}