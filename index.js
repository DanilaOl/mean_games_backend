const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 10000;
const app = express();
const app_routes = require('./routes/game_routes');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.DB_URI);

mongoose.connection.on('connected', () => {
    console.log("Successful connected to db");
})

mongoose.connection.on('error', (err) => {
    console.log("Error of connection to db: " + err);
})

app.use(cors());
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());
app.use('/', app_routes);
http.createServer(app).listen(port);

console.log("Backend is running: ", port);