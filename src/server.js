const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');

mongoose.connect(config.mongoDb.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(config.port, function () {
    console.log(`app listening on port ${config.port}`)
})