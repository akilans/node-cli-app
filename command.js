#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const { 
    addEmployee, 
    findEmployee, 
    updateEmployee, 
    removeEmployee, 
    listEmployees 
} = require('./app');


// Prompt Questions 

const questions = [
    {
        type: "input",
        name: "firstName",
        message: "Enter first name - "
    },
    {
        type: "input",
        name: "lastName",
        message: "Enter last name - "
    },
    {
        type: "input",
        name: "email",
        message: "Enter email - "
    },
    {
        type: "input",
        name: "location",
        message: "Enter location - "
    }
];

program
    .version("1.0.0")
    .description("Employee Management CLI application");

// Add employee Command

program
    .command('add')
    .alias('a')
    .description("Add new employee")
    .action(() => {
        prompt(questions).then((answers) => {
            addEmployee(answers);
        });
    })

// update employee by id command

program
    .command('update <id>')
    .alias('u')
    .description("Update employee")
    .action((id) => {
        prompt(questions).then((answers) => {
            updateEmployee(id, answers);
        });
    })

// remove employee by id command

program
    .command('remove <id>')
    .alias('r')
    .description("Remove employee")
    .action((id) => {
        removeEmployee(id);
    })

// list employees command

program
    .command('list')
    .alias('l')
    .description("List employees")
    .action(() => {
        listEmployees();
    })

/*
program
.command('add <firstName> <lastName> <email> <location>')
.alias('a')
.description("Add new employee")
.action((firstName, lastName, email, location) => {
    addEmployee({ firstName, lastName, email, location });
})
*/

// Find employee by name command 

program
    .command("find <name>")
    .alias("f")
    .description("Find Employee")
    .action((name) => {
        findEmployee(name);
    })

program.parse(process.argv);