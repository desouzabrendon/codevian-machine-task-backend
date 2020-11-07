const mongoose = require('mongoose');

const _address = {
    city: {
        type: String,
        default: ''
    },
    address_line1: {
        type: String,
        default: ''
    },
    address_line2: {
        type: String,
        default: ''
    },
    postal_code: {
        type: String,
        default: ''
    }
}

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: _address

}, { versionKey: false });

const employeeModel = mongoose.model('employeeModel', employeeSchema, 'employees');

// const insertEmployee = (payload) => {
//     return employeeModel.insertMany(payload);
// };

module.exports = {
    employeeModel,
    // insertEmployee
}
