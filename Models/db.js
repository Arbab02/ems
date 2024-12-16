const mongoose = require('mongoose');

const mongo_url = 'mongodb+srv://arbab02:arbab02@cluster0.m3fklkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...')
    }).catch((err) => {
        console.log('Error while MongoDB connecting ...', err);
    })
