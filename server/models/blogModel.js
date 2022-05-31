// Model for blog's
// Contains all details that form a blog

//Config
const mongoose = require('mongoose');

//Schema
const blogSchema = new mongoose.Schema({
        title: {
            type: String,
            //required: true
        },
        caption: {
            type: String,
        },
        content: {
            type: String,
        },
        imageURL: {
            type: String,
        },
        author: {
            type: String,
        }
        },
    {
    //adds a createdAt and updatedAt field to the schema (so can see when it was created and updated)
    timestamps: true,
    }
);

//Model
const Blog = mongoose.model('blog', blogSchema);


//Export
module.exports = Blog;
    