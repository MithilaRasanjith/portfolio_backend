// defined the relation schema

const mongoose = require('./db');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: Date,
});

const Blogs = mongoose.model('Blogs', blogSchema);

module.exports = Blogs;
