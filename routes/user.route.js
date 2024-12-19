const express = require('express');
const router = express.Router();
const User = require('../models/user.model');


router.post('/register', async (req, res) => {
    const { firstName, lastName, NIDNumber, phoneNumber, password, bloodGroup } = req.body;
    const newUser = new User({ firstName, lastName, NIDNumber, phoneNumber, password, bloodGroup });
    await newUser.save();
    res.status(201).send('User registered successfully');
});


module.exports = router;

