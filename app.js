require('dotenv').config();
import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import teamRouter from './src/modules/Team/router'
import countryRouter from './src/modules/Country/router'
import playerRouter from './src/modules/Player/router'
import colendarRouter from './src/modules/Colendar/router'
const app = express();
const PORT = process.env.PORT || 4000;

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));

db.once('open', () => console.log(("Connected to the db")));
app.use('/team', teamRouter);
app.use('/country', countryRouter);
app.use('/player', playerRouter);
app.use('/colendar', colendarRouter);
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
