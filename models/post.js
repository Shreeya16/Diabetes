const mongoose = require('mongoose'); // import mongoose
// extract the schema from that mongoose object
const Schema = mongoose.Schema; // create a new post schema
const postSchema = new Schema({
title: {
type: String,
required: true
},
content: {
type: String,
required: true
}
}); // export the model
module.exports = mongoose.model('Post', postSchema);

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // create a new Post instance
    const post = new Post({
    title: title,
    content: content
    });
    // save the instance to the database
    post
    .save()
    .then(postSaved => {
    res.status(201).json({
    message: 'Post created successfully!',
    post: postSaved
    });
    })
    .catch(err => console.log('err', err));
    }


exports.getPosts = (req, res, next) => {
    // return array of existing posts
    Post.find().then(foundPosts => {
    res.json({
    message: "All posts",
    posts: foundPosts
    });
    });
    }