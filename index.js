const express = require('express');
const { render } = require('pug');
const app = express()

// makes routes available from routes.js
const mainRoutes = require('./routes')
app.use(mainRoutes)


// static route to serve static files from public folder
app.use('/static', express.static('public'));
//sets the view engine to pug
app.set('view engine', 'pug');

// 404 error 
app.use((req, res, next) => {
    const err = new Error('Sorry We could not find your page!');
    err.status = 404;
    res.status(404).render('page-not-found', { error: err })
    next(err)
});

// global error 
app.use((err, req, res, next) => {
    err.message = "Something failed!!"
    err.status = 500
    res.status(500).render('error', { error: err })
});

//sets localhost port 
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
