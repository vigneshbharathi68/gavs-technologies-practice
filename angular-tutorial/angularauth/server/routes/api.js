const express = require('express');
const router = express.Router();
const User = require('../models/user');

const mongoose = require('mongoose');
const db = 'mongodb+srv://mongo:1234@cluster0.hd3ez.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err);
    } else {
        console.log('Connected to mongodb');
    }
})

router.get('/', (req, res) => {
    res.send('From API route');
})

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid email');   
            } else if (user.password !== userData.password) {
                res.status(401).send('Invalid password');
            } else {
                res.status(200).send(user);
            }
        }
    })
})

router.get('/events', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "The most awaited auto show in the country",
            "date": "2019-03-11T18:30:00.000Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "The most awaited auto show in the country",
            "date": "2019-03-11T18:30:00.000Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "The most awaited auto show in the country",
            "date": "2019-03-11T18:30:00.000Z"
        }
    ]

    res.json(events);
})

router.get('/special', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "The most awaited auto show in the country",
            "date": "2019-03-11T18:30:00.000Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "The most awaited auto show in the country",
            "date": "2019-03-11T18:30:00.000Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "The most awaited auto show in the country",
            "date": "2019-03-11T18:30:00.000Z"
        }
    ]

    res.json(events);
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser);
        }
    })
});

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser);
        }
    })
})

// style="

// background-image: url(seed_heritage_homepage.jpg); 
// background-size: cover; 
// background-position: center center; 
// background-repeat: no-repeat;

module.exports = router;
