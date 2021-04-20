const express = require('express');
const app = express()
// const path = require('path')
const data = require('./data/data.json');
const projects = data.projects

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/:id', (req, res) => {
    const id = req.params.id
    const project = projects[id]
    res.render('project', { project })
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});