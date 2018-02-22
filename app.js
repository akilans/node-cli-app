const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://127.0.0.1:27017/employee-cli');

const Employee = require('./models/employee');

// Add Employee

const addEmployee = (employee) => {
    Employee.create(employee).then((employee) => {
        console.log(employee);
        console.log("Employee Added");
        mongoose.connection.close();
    });
};

// Update employee
const updateEmployee = (id,employee) => {
    Employee.update({_id:id},employee).then((result) => {
        console.log(result);
        console.log("Employee Updated");
        mongoose.connection.close();
    });
};

// Remove Employee

const removeEmployee = (id) => {
    Employee.remove({_id:id}).then((result) => {
        console.log(result);
        console.log("Employee Removed");
        mongoose.connection.close();
    });
};


// List Employees

const listEmployees = () => {
    Employee.find().then((employees) => {
        console.log(employees);
        console.log(`Total Employees ${employees.length}`);
        mongoose.connection.close();
    });
};

// Find Employee

const findEmployee = (name) => {

    const search = new RegExp(name, 'i');
    console.log(name);
    console.log(search);

    Employee.find({ $or: [{ firstName: search }, { lastName: search }] }).then((employee) => {
        console.log(employee);
        console.log(`${employee.length} matches found`);
        mongoose.connection.close();
    })
};

// Exporting all the Functions

module.exports = {
    addEmployee,
    findEmployee,
    updateEmployee,
    removeEmployee,
    listEmployees
};

