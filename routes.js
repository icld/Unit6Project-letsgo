const e = require('express');
const express = require('express');
const router = express.Router();

const data = require('./data/data.json');
const projects = data.projects;

//route and render index page
router.get('/', (req, res) => {
    res.render('index', { projects });
});

//route and render about page
router.get('/about', (req, res) => {
    res.render('about');
});

//route and render individual project page
router.get('/projects/:id', (req, res, next) => {
    const num = parseFloat(req.params.id);
    const project = data.projects.find(proj => proj.id === num);
    if (project) {
        res.render('project', { project })
    } else {
        const err = new Error();
        err.status = 404;
        err.message = '404 error handler called.  Sorry!  We could not find your page!';
        next(err);
    }
});

module.exports = router