const express = require('express');
const home = express.Router();

home.get('/home',(req, res) => {
    res.send("home");
});

home.route('/')
    .get((req, res) => {
        res.render('home', {
            nav: [
                {link: '/nutrient', title: 'Nutrients'},
                {link: '/medicine', title: 'Medicine'},
                {link: '/home', title: 'Home' },
            ],
            title: 'Blog List',
            home
        }
        );
    });

module.exports = home;