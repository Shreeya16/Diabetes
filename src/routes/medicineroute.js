const express = require('express');
const medicine = express.Router();

medicine.get('/medicine',(req, res) => {
    res.send("medicine");
});

medicine.route('/')
    .get((req, res) => {
        res.render('medicine', {
            nav: [
                {link: '/nutrient', title: 'Nutrients'},
                {link: '/medicine', title: 'Medicine'},
                {link: '/home', title: 'Home' },
            ],
            title: 'Blog List',
            medicine
        }
        );
    });

module.exports = medicine;