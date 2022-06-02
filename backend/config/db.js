const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://'+process.env.DB_USER_PASS+'@cluster0.mzuhsey.mongodb.net/'+process.env.DB_NAME+'')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));