require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/cases', require('./routes/caseMasterRoutes'));
app.use('/api/option-sets', require('./routes/optionSetRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
