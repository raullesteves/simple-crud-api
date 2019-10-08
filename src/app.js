const express = require('express');
const cors = require('cors');
const app = express();
const ping = require('./routes/pingRoute');
const userRoute = require('./routes/userRoute');

app.use(express.json());
app.use(cors());
app.use('/ping', ping);
app.use('/user', userRoute);

module.exports = app;