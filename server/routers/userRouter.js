//User Routers/Controllers
// these are the routes that are used to handle the user's CRUD operations

//Config 
const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register user 
// POST method
router.post('/register', async (req, res) => {
    try {
        const { email, password, passwordVerify, role } = req.body;
        
        // Check that all info is there
        if (!email || !password || !passwordVerify) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }
        // Check that password longer than 6 characters
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }
        // Check that password and passwordVerify match
        if (password !== passwordVerify) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        // Check that email is not already in use
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
    
        // User creation
    
        // create the user
        const newUser = new User({
            email,
            passwordHash,
            role
        });
    
        // save the user
        const savedUser = await newUser.save();
    
        // create the token
        const token = jwt.sign({
            user: savedUser._id,
            role: savedUser.role
        }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });
    
        // send the token in a HTTP-only cookie 
        res.cookie('token', token, {
            httpOnly: true
            //other options here if want to deploy
        });
    
        // respond with the saved user
        res.status(201).json(savedUser);
    
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
    });
 
//login user
// POST method
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validation

        // Check that all info is there
        if (!email || !password) {
            return res.status(400).json({ message: 'Please fill in all fields' }); 
        }
        // Check that email is in the database
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'Email does not exist' });
        }
        // Check that password is correct
        const isPasswordValid = await bcrypt.compare(password, existingUser.passwordHash);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        // create the token
        const token = jwt.sign({
            user: existingUser._id,
            role: existingUser.role
        }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        // send the token in a HTTP-only cookie
        res.cookie('token', token, {
            httpOnly: true
            //other options here if want to deploy
        });

        // respond with the saved user
        res.status(200).json(existingUser);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong' });

    }
});

//Logout user
// GET method
router.get('/logout', (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
        });
        res.status(200).json({ message: 'Logged out' });
});

// Check if user logged in
// true or false if logged in or not
// GET method
router.get('/loggedIn', (req, res) => {
    try {
        //require token
        const token = req.cookies.token;
        // if no token, return false
        if (!token) return res.json(false);
        // verify the token
        jwt.verify(token, process.env.JWT_SECRET);
        // if token is valid, return true
        res.send(true);
      } catch (err) {
        console.error(err);
        res.json(false);
      }
    }
);

// Check if role is admin
// true or false if admin or not
// GET method
router.get('/admin', (req, res) => {
    try {
        //require token
        const token = req.cookies.token;
        // if no token, return false
        if (!token) return res.json(false);
        // verify the token (decoded)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // if the role is true, return true (true = admin)
        if (decoded.role === true ) {
            res.send(true);
        } else {
            // if the role is false, return false (false = (regular) user)
            res.send(false);
        }
    } catch (err) {
        console.error(err);
        res.send(false);
    }
});


//Exports
module.exports = router;
