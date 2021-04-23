const express = require('express');
const { render } = require('pug');
const app = express()
// const path = require('path')

const mainRoutes = require('./routes')
// const errorHandlers = require('./errorHandlers')


app.use(mainRoutes)

app.use('/static', express.static('public'));

app.set('view engine', 'pug');



app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    err.message = "Sorry can't find it"
    next(err);
});

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



app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
