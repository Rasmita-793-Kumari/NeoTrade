const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : false
}))

app.use(cors());

// routes
const userRoute = require('./routes/userRoutes');

app.use('/api/user', userRoute);

module.exports = app;