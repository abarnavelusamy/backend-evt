// const express = require('express');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//     const server = express();

//     server.get('*', (req, res) => {
//         return handle(req, res);
//     });

//     server.listen(3000, (err) => {
//         if (err) throw err;
//         console.log('> Ready on http://localhost:3000');
//     });
// });
// const next = require('next');
const express = require('express');
const voter = require('./routes/voter');
const cors = require('cors');
const company = require('./routes/company');
const candidate = require('./routes/candidate');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const path = require('path');
mongoose.set("strictQuery", true);
require('dotenv').config({ path: __dirname + '/.env' });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


// const app = next({
//     dev: process.env.NODE_ENV !== 'production',
// });

const routes = require('./routes');
// const handler = app.getRequestHandler();

// app.prepare().then(() => {
const exp = express();
exp.use(bodyParser.json())
exp.use(cors());
exp.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
exp.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/homepage.js'));
});

exp.use('/company', company);

exp.use('/voter', voter);

exp.use('/candidate', candidate);

    exp.listen(4000, function () {
        console.log('Node server listening on port 4000');
    });
// });

