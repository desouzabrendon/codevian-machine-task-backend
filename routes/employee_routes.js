const express = require('express');
const router = express.Router();
const employeeModel = require('../models/employee_model');
const employeeSchema = employeeModel.employeeModel;

/**
 * Get all Employees
 */
router.get('/', async (req, res) => {
    let condition = {};
    if (req.query.search) {
        condition = {
            $or: [
                { name: { $regex: new RegExp(req.query.search, 'i') } },
                { "address.city": { $regex: RegExp(req.query.search, 'i') } }
            ]
        }
    }
    try {
        const employees = await employeeSchema.find(condition);
        res.status(200).json(employees);
    } catch (error) {
        res.json({ message: error });
    }
});


/**
 * Get Employee by ID
 */
router.get('/:id', async (req, res) => {
    try {
        const employee = await employeeSchema.findOne({ _id: req.params.id });
        res.status(200).json(employee);
    } catch (error) {
        res.json({ message: error });
    }
});

/**
 * Create a new Employee Record
 */
router.post('/', async (req, res) => {
    try {
        // const result = await employeeModel.insertEmployee(req.body);
        const result = await employeeSchema.create(req.body);
        res.json(result);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;