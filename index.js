const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/employee', require('./routes/employee_routes'));

// Root
app.get('/', (req, res) => {
    res.json('Server Running');
});

// Database Connection
mongoose.connect(
    'mongodb://localhost/CODEVIAN_MACHINE_TASK',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB !')
);

app.listen(3000, () => console.log('Listening on port 3000 !'));