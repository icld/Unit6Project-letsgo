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
    const err = new Error('Not Found');
    err.status = 404;
    err.message = "Sorry! Can't find what you're lookin' for!"
    next(err);
});

// global error 
app.use((err, req, res, next) => {
    if (res.status(404)) {
        res.render('page-not-found', {
            message: err.message,
            error: 404
        });
    } else {
        res.render('error', {
            message: err.message,
            error: 500
        });
    }

});

//sets localhost port 
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
