const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    location: { type: String }
})

module.exports = mongoose.model('employee', EmployeeSchema);