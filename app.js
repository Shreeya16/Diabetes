const express = require('express');
const chalk = require('chalk');
const path = require('path');
const debug = require ('debug')('app')
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || PORT;
app.use(morgan('tiny'));
app.use(express.json());
app.set('views', './src/views');
app.set('view engine', 'ejs');
const feedRoutes = require('./routes/feed');

const medicinerouter = require('./src/routes/medicineroute');
app.use('/medicine',medicinerouter );

const nutrientrouter = require('./src/routes/nutrientroute');
app.use('/nutrient', nutrientrouter);

const homerouter = require('./src/routes/homeroute');
app.use('/home', homerouter);

app.use(express.static(path.join(__dirname,'/public')));
app.use('/css', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

const blogRouter = require('./src/routes/blogRoutes');
app.use('/posts', blogRouter);
app.use('/feed', feedRoutes);

app.get('/', function(req, res){
    res.render('index', 
    {
        nav: [
            {link: '/posts', title: 'Posts'},
            {link: '/about', title: 'About'}
        ],
        title: 'My Blog Project'}
  
        );
});

app.listen(3000, function(){
    debug(`Listening on port ${chalk.green('3000')}`);
});


mongoose.connect('mongodb+srv://shreeyagurung4:Valorant1@cluster.dfvr9tv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster')
.then(result => {
app.listen(3001);
})
.catch(err => console.log('err', err))

