// defined the relation schema

const mongoose = require('./db');

const projectSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: Date,
});

const Blogs = mongoose.model('Blogs', projectSchema);

module.exports = Blogs;
