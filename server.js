const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const apiRouter = require('./api/api');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());


app.use('/api', apiRouter);
app.use(errorhandler());

const PORT = process.env.PORT || 4000;

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})

module.exports = app;