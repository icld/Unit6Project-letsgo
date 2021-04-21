const express = require('express');
const router = express.Router();

const data = require('./data/data.json');
const projects = data.projects



router.get('/', (req, res) => {

    res.render('index', { projects })
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/projects/:id', (req, res) => {
    const num = parseFloat(req.params.id)

    const project = data.projects.find(proj => proj.id === num)

    if (project) {
        console.log(project)
        res.render('project', { project })
    } else {
        console.error('Something is wrong')
        res.redirect('/projects/1')
    }
});

router.get('/error', (req, res) => {
    res.render('error')
});

router.get('/page-not-found', (req, res) => {
    res.render('page-not-found')
});





module.exports = router