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
        res.redirect('/page-not-found')
    }
});






module.exports = router