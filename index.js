const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/test', require('./routes/test_routes'));

// Root
app.get('/', (req, res) => {
    res.json('Server Running');
});

// Database Connection
mongoose.connect(
    'mongodb://localhost/test_db',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB !')
);

app.listen(3000, () => console.log('Listening on port 3000 !'));