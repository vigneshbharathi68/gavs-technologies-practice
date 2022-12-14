const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const db = 'mongodb+srv://mongo:1234@cluster0.hd3ez.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err);
    } else {
        console.log('Connected to mongodb');
    }
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretKey');
    console.log(payload)
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    } 
    req.userId = payload.subject;
    next();

}

router.get('/', (req, res) => {
    res.send('From API route');
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            let payload = { subject: registeredUser._id };
            let token = jwt.sign(payload, 'secretKey');
            console.log("Token generated successfully =>", token);
            res.status(200).send({token});
        }
    })
});

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
                let payload = { subject: user._id };
                let token = jwt.sign(payload, 'secretKey');
                console.log("Token generated successfully =>", token);
                res.status(200).send({ token });
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

router.get('/special', verifyToken, (req, res) => {
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

// style="

// background-image: url(seed_heritage_homepage.jpg); 
// background-size: cover; 
// background-position: center center; 
// background-repeat: no-repeat;

module.exports = router;
