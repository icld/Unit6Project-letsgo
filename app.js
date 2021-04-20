const express = require('express');
const app = express()
// const path = require('path')

const mainRoutes = require('./routes')


app.use(mainRoutes)

app.use('/static', express.static('public'));

app.set('view engine', 'pug');





app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
