const express = require('express');
const router = express.Router();
const testModel = require('./../models/test_model');
const testSchema = testModel.testModel;

router.get('/', async (req, res) => {
    const documents = await testSchema.find();
    res.status(200).json(documents);
});

// router.post('/', async (req, res) => {
//     const document = new testModel({ name: req.body.name });
//     try {
//         const result = await document.save();
//         res.json(result);
//     } catch (error) {
//         res.json({ message: error });
//     }
// });
// router.post('/', async (req, res) => {
//     const document = { name: req.body.name };
//     try {
//         const result = await testModel.create(document);
//         res.json(result);
//     } catch (error) {
//         res.json({ message: error });
//     }
// });
router.post('/', async (req, res) => {
    try {
        const result = await testModel.insertRecords(req.body);
        res.json(result);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;