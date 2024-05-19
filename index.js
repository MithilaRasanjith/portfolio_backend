//Entry point

const express = require("express"); // create an express app
const app = express();
const port = 5000;

app.use(express.json());

require("dotenv").config();
const Project = require("./Project");
const Blog = require("./Blogs");
const Student = require("./Student");
// there are two endpoints yet (/ , /project)

app.get("/", (req, res) => {
  // this is an endpoint
  res.send("Hello, World!");
});

app.get("/projects", async (req, res) => {
  // this is an endpoint
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/projects', async (req, res) => {
  console.log(req.body);

  const project = new Project(req.body);

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
});

app.patch('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if(project){
      project.set(req.body);
      const updatedProject = await project.save();
      res.json(updatedProject);
    }else{
      res.status(404).json({message: 'Project not found'});
    }
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

app.delete('/projects/:id', async (req, res) => {
  const projectId = req.params.id;

  try {
      const project = await Project.findByIdAndDelete(projectId);

      if (!project) {
          return res.status(404).json({ error: 'Project not found' });
      }

      // Respond with a success message
      res.json({message: 'Project deleted'}); 
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.get("/blogs", async (req, res) => {
  // this is an endpoint
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/students", async (req, res) => {
  // this is an endpoint
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
