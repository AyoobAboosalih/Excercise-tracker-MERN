const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
    );

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Succesfully connected to MongoDB database");
})

const excerciseRouter = require('./routes/excercises');
const usersRouter = require('./routes/users');

app.use('/excercises', excerciseRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})