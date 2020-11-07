const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    name: String
}, { versionKey: false });

const testModel = mongoose.model('testModel', testSchema, 'test_collection');

const insertRecords = (payload) => {
    return testModel.insertMany(payload);
};

module.exports = {
    testModel,
    insertRecords
}
