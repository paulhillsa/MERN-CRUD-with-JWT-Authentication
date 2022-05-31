//Blog Routers/Controllers
// these are the routes that are used to handle the blog's CRUD operations

// Config
const router = require("express").Router();
const Blog = require("../models/blogModel");
const auth = require("../middleware/auth");

// Create a new blog
// POST method
router.post("/add", auth, async (req, res) => {
    try {
        // request info from body
        const { title, caption, content, imageURL, author} = req.body;
        // create new blog with info
        const newBlog = new Blog({
            title,
            caption,
            content,
            imageURL,
            author
        });
        // save the blog
        const savedBlog = await newBlog.save();
        // respond with the saved blog
        res.json(savedBlog);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

// Get info about a blog by id
// GET method
router.get("/:id", auth, async (req, res) => {
    try {
        // get the id from the url
        const id = req.params.id;
        // find the blog with the id
        const blog = await Blog.findById(id);
        // respond with the blog
        res.json(blog);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

// Edit a blog by id
// PUT method
router.put("/edit/:id", auth, async (req, res) => {
    try {
        // request info from body
        const { title, caption, content, imageURL,author } = req.body;
        // find the blog
        const id = req.params.id;
        const blog = await Blog.findById(id);
        // update the blog
        blog.title = title;
        blog.caption = caption;
        blog.content = content;
        blog.imageURL = imageURL;
        blog.author = author;
        // save the blog
        const savedBlog = await blog.save();
        // respond with the saved blog
        res.json(savedBlog);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

// Delete a blog by id
// DELETE method
router.delete("/delete/:id", auth, async (req, res) => {
    try {
        // find the blog
        const blog = await Blog.findById(req.params.id);
        // delete the blog
        await blog.remove();
        // respond with the deleted blog
        res.json(blog);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

// Get all blogs from the database
// GET method
router.get("/" , auth, async (req, res) => {
try {
    // find all blogs
    const blogs = await Blog.find();
    // respond with all blogs
    res.json(blogs);
} catch (err) {
    console.error(err);
    res.status(500).send();
}
});

// Export
module.exports = router;