// entry point 

const express = require('express'); // create an express app
const app = express();
const port = 5000;


require('dotenv').config();
const Project = require('./Project');
const Blogs = require('./Blogs');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/projects', async (req, res) => { // '/     ' -> endpoints
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/blogs', async (req, res) => { // '/     ' -> endpoints
    try {
        const blogs = await Blogs.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.listen(port, () => { // app.listen -> run the app
    console.log(`Server running at http://localhost:${port}/`);
});