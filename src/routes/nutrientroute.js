const express = require('express');
const nutrient = express.Router();

nutrient.get('nutrient,',(req, res) => {
    res.send("nutrient");
});

nutrient.route('/')
    .get((req, res) => {
        res.render('nutrient', {
            nav: [
                {link: '/nutrient', title: 'Nutrients'},
                {link: '/medicine', title: 'Medicine'},
                {link: '/home', title: 'Home' },
            ],
            title: 'Blog List',
            nutrient
        }
        );
    });

module.exports = nutrient;