import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import PersonRoutes from './routes/PersonRoutes.js';

var PORT = 9000;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var personRoutes = new PersonRoutes();
app.use(personRoutes.configure());

app.listen(PORT, '127.0.0.1');

console.log(`Server running at http://127.0.0.1:${PORT}/`);
