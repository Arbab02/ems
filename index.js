const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const EmployeeRoutes = require('./Routes/EmployeeRoutes');
const PORT = process.env.PORT || 8080;

require('./Models/db');
const corsOptions = {
  origin: 'https://emsfrontend-sandy.vercel.app', // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // HTTP methods
  credentials: true, // Include cookies if needed
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/employees', EmployeeRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
