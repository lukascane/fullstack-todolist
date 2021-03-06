const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require  ('./Routes/userRoutes');
const userToDo = require ('./Routes/userToDo');
const passport = require ('passport');
const JWTConfig = require ('./passport');
const cookieParser = require ('cookie-parser')

const app = express();


dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use('/user', userRoutes);
app.use('/todo', userToDo);
app.use(cookieParser());
app.use(passport.initialize());
JWTConfig(passport);
mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('We are connected to the database'))
    .catch(() => console.log('We are not connected to the database'));


app.listen(4000, () => console.log('Server is ready for requests.'));